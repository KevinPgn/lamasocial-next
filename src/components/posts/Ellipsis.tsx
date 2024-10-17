"use client"
import {Ellipsis as EllipsisIcon} from "lucide-react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { deletePost } from "@/server/ActionPost.action"

export const Ellipsis = ({postId}: {postId: string}) => {
  const handleDeletePost = async () => {
    await deletePost({postId})
  }  
  
  return <DropdownMenu>
    <DropdownMenuTrigger>
      <EllipsisIcon size={20} className="cursor-pointer" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-40 rounded-xl px-2 py-3">
      <DropdownMenuItem className="cursor-pointer font-semibold">View</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer font-semibold">Re-post</DropdownMenuItem>
      <DropdownMenuItem className="text-red-500 cursor-pointer font-semibold" onClick={handleDeletePost}>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}