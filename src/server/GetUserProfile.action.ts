"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
import { getSession } from "@/components/utils/CacheSession"

export const getUserProfile = cache(async (userId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id

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

            ...(currentUserId ? {
                followers: {
                    where: {
                        followerId: userId
                    }
                }
            } : {}),

            ...(currentUserId ? {
                friendOf: {
                    where: {
                        userId: currentUserId,
                        friendId: userId
                    }
                }
            } : {}),
        }
    })

    if(!user) {
        return null
    }

    return {
        ...user,
        isFollowing: currentUserId ? user.followers.length > 0 : false,
        isFriend: currentUserId ? user.friendOf.length > 0 : false,
    }
})

export const getUserPosts = cache(async (userId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id

    const posts = await prisma.post.findMany({
        where: {
            authorId: userId
        },
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
    })

    return posts.map((post) => ({
        ...post,
        isLiked: currentUserId ? post.likes.length > 0 : false,
    }))
})

export const getUserProfileWithPosts = cache(async (userId: string) => {
    const [profile, posts] = await Promise.all([
        getUserProfile(userId),
        getUserPosts(userId)
    ])

    return { profile, posts }
})