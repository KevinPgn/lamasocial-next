"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

export const followUser = authenticatedAction
    .schema(z.object({
        userId: z.string(),
    }))
    .action(async ({parsedInput: {userId}, ctx:{userId: currentUserId}}) => {
        const existingFollow = await prisma.follow.findUnique({
            where: {
                followerId_followingId: {
                    followerId: currentUserId,
                    followingId: userId,
                }
            }
        })

        if(existingFollow) {
            await prisma.follow.delete({
                where: {
                    followerId_followingId: {
                        followerId: currentUserId,
                        followingId: userId,
                    }
                }
            })
        } else {
            await prisma.follow.create({
                data: {
                    followerId: currentUserId,
                    followingId: userId,
                }
            })
        }

        revalidatePath(`/profile/${userId}`)
    })