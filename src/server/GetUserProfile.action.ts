"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

export const getUserProfile = cache(async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            image: true,
            living: true,
            school: true,
            job: true,
            bio: true,
            website: true,
            createdAt: true,
            updatedAt: true,

            _count: {
                select: {
                    posts: true,
                    followers: true,
                    following: true,
                }
            },

        }
    })

    if(!user) {
        return null
    }

    return user
})