"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
/*
model FriendShip {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  friendId String
  friend User @relation("friends", fields: [friendId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model FriendRequest {
  id         String   @id @default(cuid())
  senderId   String
  receiverId String
  status     String   // Par exemple: "pending", "accepted", "rejected"
  sender     User     @relation("sender", fields: [senderId], references: [id], onDelete: Cascade)
  receiver   User     @relation("receiver", fields: [receiverId], references: [id], onDelete: Cascade)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@unique([senderId, receiverId])
}
*/

export const addUserToFriend = authenticatedAction
  .schema(z.object({
    userId: z.string()
  }))
  .action(async ({parsedInput:{userId}, ctx:{userId: currentUserId}}) => {
    const user = await prisma.user.findUnique({
      where:{
        id:userId
      }
    })
    
    if(!user) {
      return {
        error: "User not found"
      }
    }

    const createFriendsRequest = await prisma.friendRequest.create({
      data:{
        senderId: currentUserId,
        receiverId: userId,
        status: "pending"
      }
    })

    return {
      createFriendsRequest,
      success: "Friend request created"
    }
  })

export const acceptTheFriends = authenticatedAction
  .schema(z.object({  
    friendRequestId: z.string()
  }))
  .action(async ({parsedInput:{friendRequestId}, ctx:{userId: currentUserId}}) => {
    const friendRequest = await prisma.friendRequest.findUnique({
      where:{
        id: friendRequestId
      }
    })

    if(!friendRequest) {
      return {
        error: "Friend request not found"
      }
    }

    if(friendRequest.receiverId !== currentUserId) {
      return {
        error: "You are not the receiver of this friend request"
      }
    }

    const acceptTheFriends = await prisma.friendRequest.update({
      where:{
        id: friendRequestId
      },
      data:{
        status: "accepted"
      }
    })

    if(acceptTheFriends) {
      const createFriendShip = await prisma.friendShip.create({
        data:{
          userId: currentUserId,
          friendId: friendRequest.senderId
        }
      })

      if(createFriendShip) {
        return {
          success: "Friendship created"
        }
      }
    }
  })

export const denyTheFriends = authenticatedAction
  .schema(z.object({
    friendRequestId: z.string()
  }))
  .action(async ({parsedInput:{friendRequestId}, ctx:{userId: currentUserId}}) => {
    const friendRequest = await prisma.friendRequest.findUnique({
      where:{
        id: friendRequestId
      }
    })

    if(!friendRequest) {
      return {
        error: "Friend request not found"
      }
    }

    if(friendRequest.receiverId !== currentUserId) {
      return {
        error: "You are not the receiver of this friend request"
      }
    }

    const deleteTheFriendsRequest = await prisma.friendRequest.delete({
      where:{
        id: friendRequestId
      }
    })

    if(deleteTheFriendsRequest) {
      return {
        success: "Friend request denied"
      }
    }
  })

export const removeFriend = authenticatedAction
  .schema(z.object({
    friendId: z.string()
  }))
  .action(async ({parsedInput:{friendId}, ctx:{userId: currentUserId}}) => {
    const friendShip = await prisma.friendShip.findFirst({
      where:{
        userId: currentUserId,
        friendId: friendId
      }
    })

    if(!friendShip) {
      return {
        error: "Friendship not found"
      }
    }

    const removeFriend = await prisma.friendShip.delete({
      where:{
        id: friendShip.id
      }
    })

    if(removeFriend) {
      return {
        success: "Friend removed"
      }
    }
  })
