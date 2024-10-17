"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

export const commentPost = authenticatedAction
    .schema(z.object({
        postId: z.string(),
        content: z.string(),
        parentId: z.string().optional()
    }))
    .action(async ({ctx:{userId}, parsedInput:{postId, content, parentId}}) => {
        const comment = await prisma.comment.create({
            data: {
                content,
                authorId: userId,
                postId,
                parentId
            }
        })
        
        revalidatePath(`/post/${postId}`)
        return comment
    })
