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

export const sendFriendRequest = authenticatedAction
  .schema(z.object({
    userId: z.string(),
  }))
  .action(async ({parsedInput: {userId}, ctx:{userId: currentUserId}}) => {
    // check if the user is already friends
    const existingFriendShip = await prisma.friendShip.findFirst({
      where: {
        OR: [
          { userId: currentUserId, friendId: userId },
          { userId: userId, friendId: currentUserId },
        ]
      }
    })

    if(existingFriendShip) {
      throw new Error("You are already friends")
    }

    // check if the friend request already exists
    const existingFriendRequest = await prisma.friendRequest.findFirst({
      where: {
        OR: [
          { senderId: currentUserId, receiverId: userId },
          { senderId: userId, receiverId: currentUserId },
        ]
      }
    })

    if(existingFriendRequest) {
      throw new Error("Friend request already sent")
    }

    await prisma.friendRequest.create({
      data: {
        senderId: currentUserId,
        receiverId: userId,
        status: "pending",
      }
    })

    revalidatePath(`/profile/${userId}`)
  })

export const acceptTheFriendRequest = authenticatedAction
  .schema(z.object({
    userId: z.string(),
  }))
  .action(async ({parsedInput: {userId}, ctx:{userId: currentUserId}}) => {
    await prisma.friendShip.create({
      data: {
        userId: currentUserId,
        friendId: userId,
      }
    })

    await prisma.friendRequest.delete({
      where: {
        senderId_receiverId: {
          senderId: userId,
          receiverId: currentUserId,
        }
      }
    })
    
    revalidatePath(`/profile/${userId}`)
  })

export const rejectTheFriendRequest = authenticatedAction
  .schema(z.object({
    userId: z.string(),
  }))
  .action(async ({parsedInput: {userId}, ctx:{userId: currentUserId}}) => {
    await prisma.friendRequest.delete({
      where: {
        senderId_receiverId: {
          senderId: userId,
          receiverId: currentUserId,
        }
      }
    })

    revalidatePath(`/profile/${userId}`)
  })

export const deleteTheFriendship = authenticatedAction
  .schema(z.object({
    userId: z.string(),
  }))
  .action(async ({parsedInput: {userId}, ctx:{userId: currentUserId}}) => {
    await prisma.friendShip.deleteMany({
      where: {
        OR: [
          { userId: currentUserId, friendId: userId },
          { userId: userId, friendId: currentUserId },
        ]
      }
    })

    revalidatePath(`/profile/${userId}`)
  })
