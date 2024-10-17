"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

// get number of followers of the current User
export const getNumberFollow = cache(authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
        const followers = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                _count: {
                    select: {
                        followers: true
                    }
                }
            }
        })
        if(!followers) return 0

        return followers._count.followers
    }))