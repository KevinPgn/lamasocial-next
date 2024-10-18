"use client"
import { Check } from "lucide-react"
import { acceptTheFriendRequest } from "@/server/FriendShip.action"

export const AcceptFriendRequest = ({friendRequestId}: {friendRequestId: string}) => {
  const handleAcceptFriendRequest = async () => {
    const res = await acceptTheFriendRequest({friendRequestId})
    console.log(res)
  }

  return <div onClick={handleAcceptFriendRequest} className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 cursor-pointer hover:bg-green-200 duration-75">
    <Check size={17} className="text-green-500" />
  </div>
}