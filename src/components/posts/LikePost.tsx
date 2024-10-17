"use client"
import { Flame } from "lucide-react"

export const LikePost = ({postId, isLiked, postLikes}: {postId: string, isLiked: boolean, postLikes: number}) => {
  return <>
    <div className="flex items-center gap-2 p-2 px-3 bg-red-100 rounded-lg cursor-pointer hover:bg-red-200 duration-75">
      <Flame size={20} className="text-red-500" />
      <div className="w-[1px] h-[20px] bg-red-700"></div>
      <span className="text-sm font-semibold text-red-500">{postLikes} likes</span>
    </div>
  </>
}