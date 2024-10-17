"use client"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import {Image, Video, BarChartHorizontalBig, Calendar} from "lucide-react"
import { FormImage } from "./FormImage"
import { useState } from "react"
import {createPost} from "@/server/CreatePost.action"

export const FormPost = ({sessionImage}: {sessionImage: string}) => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const [isActive, setIsActive] = useState(false)
  const [image, setImage] = useState<string>("")

  const onSubmit = async (data: any) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <div
  className="w-full shadow-md bg-white rounded-md p-4 mt-5 flex items-start gap-3">
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-3 w-full">
    {/* left */}
    <img src={sessionImage} alt="User profile" className="w-[45px] h-[45px] rounded-full object-cover" />
    {/* mid */}
    <div className="w-full flex flex-col gap-3">
      <Textarea 
        {...register("content", {
          required: true,
          minLength: 4,
          maxLength: 280
        })} 
        className="w-full text-md outline-none border-none bg-gray-100" 
        placeholder="What's on your mind? (4-280 characters)"
      />
      {errors.content && <p className="text-red-500 text-sm">Content is required</p>}
    
      <div className="flex items-center gap-5 mt-2">
        <div
        onClick={() => setIsActive(!isActive)}
        className="flex items-center gap-1 cursor-pointer">
            <Image size={20} className="text-blue-300" />
            <span className="text-sm">Photo</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
            <Video size={20} className="text-red-300" />
            <span className="text-sm">Video</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
            <BarChartHorizontalBig size={20} className="text-green-300" />
            <span className="text-sm">Pools</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
            <Calendar size={20} className="text-yellow-300" />
            <span className="text-sm">Event</span>
        </div>
      </div>
    </div>
    {/* right */}
    <div className="flex flex-col gap-2">
      <span className="text-lg">😊</span>
      <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Send</Button>
    </div>
  </form>

  {isActive && <FormImage setImage={setImage} image={image} setIsActive={setIsActive}/>}
  </div>
}