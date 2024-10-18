"use client"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {editProfile} from "@/server/EditProfile"

export const EditProfile = ({profileInformations}: {profileInformations: any}) => {
  const {register, handleSubmit, formState:{errors}} = useForm()

  const onSubmit = async (data: any) => {
    try{
        await editProfile(data)
    }catch(error){
        console.log(error)
    }
  }

  return <>
  <Dialog>
    <DialogTrigger className="w-full py-2 mt-3 text-md bg-[#272E3F] hover:bg-[#374151] duration-75 text-white rounded-md">Edit profile</DialogTrigger>
    <DialogContent className="p-5">
      <DialogHeader>
        <DialogTitle className="text-md mb-5">Update Profile</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
            {/* name and bio */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-500">Name</label>
                <Input id="name" {...register("name")} defaultValue={profileInformations.name} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bio" className="text-sm font-medium text-gray-500">Bio</label>
                <Input id="bio" {...register("bio")} defaultValue={profileInformations.bio} />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <label htmlFor="living" className="text-sm font-medium text-gray-500">Living</label>
                <Input id="living" {...register("living")} defaultValue={profileInformations.living} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="school" className="text-sm font-medium text-gray-500">School</label>
                <Input id="school" {...register("school")} defaultValue={profileInformations.school} />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <label htmlFor="job" className="text-sm font-medium text-gray-500">Job</label>
                <Input id="job" {...register("job")} defaultValue={profileInformations.job} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-sm font-medium text-gray-500">Website</label>
                <Input id="website" {...register("website")} defaultValue={profileInformations.website} />
            </div>
        </div>
        <Button type="submit" className="w-full mt-5">Update</Button>
      </form>
    </DialogContent>
  </Dialog>
  </>
}