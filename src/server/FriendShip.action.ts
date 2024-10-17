"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
/*
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

export const acceptFriendRequest = authenticatedAction
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

    const acceptFriendRequest = await prisma.friendRequest.update({
      where:{
        id: friendRequestId
      },
      data:{
        status: "accepted"
      }
    })

    return {
      acceptFriendRequest,
      success: "Friend request accepted"
    }
  })

export const rejectFriendRequest = authenticatedAction
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
    
    const rejectFriendRequest = await prisma.friendRequest.update({
      where:{
        id: friendRequestId
      },
      data:{
        status: "rejected"
      }
    })

    return {
      rejectFriendRequest,
      success: "Friend request rejected"
    }
  })


