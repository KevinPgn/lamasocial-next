"use client"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export const FormPost = ({sessionImage}: {sessionImage: string}) => {
  const { register, handleSubmit } = useForm()

  return <div className="w-full shadow-md bg-white rounded-md p-4 mt-5 flex items-start gap-3">
    {/* left */}
    <img src={sessionImage} alt="User profile" className="w-[50px] h-[50px] rounded-full object-cover" />
    {/* mid */}
    <Textarea {...register("content")} className="w-full text-md outline-none border-none bg-gray-100" placeholder="What's on your mind?" />
    {/* right */}
    <div className="flex flex-col gap-2">
      <span className="text-lg">😊</span>
      <Button className="bg-blue-500 hover:bg-blue-600">Send</Button>
    </div>
  </div>
}