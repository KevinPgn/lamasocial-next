"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { getSession } from "@/components/utils/CacheSession"

// Get all posts
export const getAllPosts = cache(async () => {
    const session = await getSession()
    const currentUserId = session?.user?.id

    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            image: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            // select 5 comments    
            comments: {
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    },
                    replies: {
                        select: {
                            id: true,
                            content: true,
                            createdAt: true,
                            author: {
                                select: {
                                    id: true,
                                    name: true,
                                    image: true,
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc",
                },
                take: 5,
            },
            _count: {
                select: {
                    comments: true,
                    likes: true
                }
            },
            ...(currentUserId ? {
                likes: {
                    where: { authorId: currentUserId },
                    select: { id: true }
                }
            } : {}),
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    })

    return posts.map((post) => ({
        ...post,
        isLiked: currentUserId ? post.likes.length > 0 : false,
    }))
})