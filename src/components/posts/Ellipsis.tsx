"use client"
import {Ellipsis as EllipsisIcon} from "lucide-react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

export const Ellipsis = ({postId}: {postId: string}) => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
      <EllipsisIcon size={20} className="cursor-pointer" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-40 rounded-xl px-2 py-3">
      <DropdownMenuItem className="cursor-pointer font-semibold">View</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer font-semibold">Re-post</DropdownMenuItem>
      <DropdownMenuItem className="text-red-500 cursor-pointer font-semibold">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}