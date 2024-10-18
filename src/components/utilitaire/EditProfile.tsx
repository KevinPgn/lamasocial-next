"use client"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogTrigger} from "@/components/ui/dialog"
export const EditProfile = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()

  return <>
  <Dialog>
    <DialogTrigger className="w-full py-2 mt-3 text-md bg-[#272E3F] hover:bg-[#374151] duration-75 text-white rounded-md">Edit profile</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Profile</DialogTitle>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </>
}