"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

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

// Get all posts
export const getAllPosts = cache(async () => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            image: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    })
    return posts
})