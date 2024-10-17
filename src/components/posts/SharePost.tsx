"use client"
import { Share } from "lucide-react"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const SharePost = ({postId}: {postId: string}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`)
    toast.success("Link copied to clipboard")
  }

  return <>
    <div onClick={handleCopy} className="flex items-center gap-2 p-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 duration-75">
      <Share size={20} className="text-green-500" />
      <div className="w-[1px] h-[20px] bg-green-700"></div>
      <span className="text-sm font-semibold text-green-500">Share</span>
    </div>
    <ToastContainer />
  </>
}