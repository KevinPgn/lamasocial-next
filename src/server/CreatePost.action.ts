"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"

// create new post
export const createPost = authenticatedAction
    .schema(z.object({
        title: z.string().optional(),
        content: z.string().optional(),
        image: z.string().optional(),
    }))
    .action(async ({parsedInput:{title, content, image}, ctx:{userId}}) => {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                image,
                authorId: userId,
            }   
        })

        revalidatePath("/")
        return {
            status: "success",
            message: "Post created successfully",
            post,
        }
    })