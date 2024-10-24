"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

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
          { senderId: userId, receiverId: currentUserId },
          { senderId: currentUserId, receiverId: userId },
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
    friendRequestId: z.string(),
  }))
  .action(async ({parsedInput: {friendRequestId}, ctx:{userId: currentUserId}}) => {
    // Fetch the friend request to get the sender's ID
    const friendRequest = await prisma.friendRequest.findUnique({
      where: { id: friendRequestId },
      select: { senderId: true, receiverId: true }
    })

    if (!friendRequest) {
      throw new Error("Friend request not found")
    }

    if (friendRequest.receiverId !== currentUserId) {
      throw new Error("You are not authorized to accept this friend request")
    }

    // Create the friendship
    await prisma.friendShip.create({
      data: {
        userId: currentUserId,
        friendId: friendRequest.senderId,
      }
    })

    // Delete the friend request
    await prisma.friendRequest.delete({
      where: { id: friendRequestId }
    })
    
    revalidatePath(`/profile/${friendRequest.senderId}`)
  })

  export const rejectTheFriendRequest = authenticatedAction
  .schema(z.object({
    friendRequestId: z.string(),
  }))
  .action(async ({parsedInput: {friendRequestId}, ctx:{userId: currentUserId}}) => {
    const friendRequest = await prisma.friendRequest.findUnique({
      where: { id: friendRequestId },
      select: { senderId: true, receiverId: true }
    })

    if (!friendRequest) {
      throw new Error("Friend request not found")
    }

    if (friendRequest.receiverId !== currentUserId) {
      throw new Error("You are not authorized to reject this friend request")
    }

    await prisma.friendRequest.delete({
      where: { id: friendRequestId }
    })

    revalidatePath(`/profile/${friendRequest.senderId}`)
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

  // get all friends requests
  export const getAllFriendsRequests = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
      const friendsRequests = await prisma.friendRequest.findMany({
        where: {
          receiverId: userId,
        },
        select: {
          id: true,
          sender: {
            select: {
              id: true,
              name: true,
              image: true,
            }
          }
        },
        take: 5,
        orderBy: {
          createdAt: 'desc'
        }
      })

      return friendsRequests
    })