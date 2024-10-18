"use client"
import { X } from "lucide-react"
import { rejectTheFriendRequest } from "@/server/FriendShip.action"

export const DenyFriendRequest = ({friendRequestId}: {friendRequestId: string}) => {
  const handleDenyFriendRequest = async () => {
    await rejectTheFriendRequest({friendRequestId})
  }

  return <div onClick={handleDenyFriendRequest} className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 cursor-pointer hover:bg-red-200 duration-75">
    <X size={17} className="text-red-500" />
  </div>
}