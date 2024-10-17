"use client"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"

export const CommentForm = ({postId, userImage}: {postId: string, userImage: string}) => {
  const { register, handleSubmit } = useForm()

  return <div className="flex items-center gap-4 mt-8">
    <img src={userImage} alt="user image" className="w-8 h-8 rounded-full" />
    <form className="flex items-center gap-3 w-full bg-gray-100 p-1 rounded-lg">
        <Input type="text" placeholder="Add a comment" {...register("comment")} className="bg-transparent border-none focus:outline-none" />
        <span className="text-md mr-5 cursor-pointer">😃</span>
    </form>
  </div>
}