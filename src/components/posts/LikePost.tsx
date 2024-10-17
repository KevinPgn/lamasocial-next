"use client"
import { Flame } from "lucide-react"
import { likePost } from "@/server/ActionPost.action"
import { cn } from "@/lib/utils"
import {useOptimistic} from "react"

export const LikePost = ({postId, isLiked, postLikes}: {postId: string, isLiked: boolean, postLikes: number}) => {
  const [optimisticLike, updateOptimisticLike] = useOptimistic(isLiked)
  const handleLike = async () => {
    updateOptimisticLike(true)
    await likePost({ postId })
  }

  return <>
    <div
    onClick={handleLike}
    className={cn("flex items-center gap-2 p-2 px-3 rounded-lg cursor-pointer duration-75", optimisticLike ? "bg-orange-200" : "bg-red-100")}>
      <Flame size={20} className={cn("text-red-500", optimisticLike ? "text-orange-500 fill-orange-500" : "")} />
      <div className={cn("w-[1px] h-[20px]", optimisticLike ? "bg-orange-500" : "bg-red-700")}></div>
      <span className={cn("text-sm font-semibold", optimisticLike ? "text-orange-500" : "text-red-500")}>{postLikes} likes</span>
    </div>
  </>
}