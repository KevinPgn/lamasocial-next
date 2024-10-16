"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"

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