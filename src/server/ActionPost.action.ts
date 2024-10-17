"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

// like a post
export const likePost = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async({parsedInput: {postId}, ctx:{userId}}) => {
        const post = await prisma.post.findUnique({ where: { id: postId } })
        if(!post){
            throw new Error("Post not found")
        }

        const existingLike = await prisma.like.findFirst({
            where: { postId, authorId: userId }
        })

        if(existingLike){
            await prisma.like.delete({ where: { id: existingLike.id } })
        } else {
            await prisma.like.create({
                data: { postId, authorId: userId }
            })
        }

        revalidatePath(`/post/${postId}`)
        return { success: true }
    })