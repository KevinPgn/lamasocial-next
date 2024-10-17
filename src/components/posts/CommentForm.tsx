"use client"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { commentPost } from "@/server/CommentPost.action"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const CommentForm = ({postId, userImage}: {postId: string, userImage: string}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data: any) => {
    try{
      await commentPost({postId, content: data.comment})
      toast.success("Commentaire ajouté")
      reset()
    }catch(error){
      toast.error("Erreur lors de l'ajout du commentaire")
    }
  }

  return <div className="flex items-center gap-4 mt-8">
    <img src={userImage} alt="user image" className="w-8 h-8 rounded-full" />
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3 w-full bg-gray-100 p-1 rounded-lg">
        <Input
          type="text"
          placeholder="Add a comment"
          {...register("comment", { required: true, minLength: 4, maxLength: 200 })}
          className="bg-transparent border-none focus:outline-none"
        />
        {errors.comment && <span className="text-red-500">Le commentaire doit contenir entre 4 et 200 caractères</span>}
        <span className="text-md mr-5 cursor-pointer">😃</span>
        <button hidden type="submit"></button>
    </form>
    <ToastContainer />
  </div>
}