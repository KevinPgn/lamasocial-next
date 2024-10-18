"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

export const editProfile = authenticatedAction
    .schema(z.object({
        name: z.string().optional(),
        bio: z.string().optional(),
        living: z.string().optional(),
        school: z.string().optional(),
        job: z.string().optional(),
        website: z.string().optional(),
    }))
    .action(async ({parsedInput:{name, bio, living, school, job, website}, ctx:{userId}}) => {
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name, bio, living, school, job, website
            }
        })
        
        revalidatePath(`/profile/${userId}`)
        return user
    })
