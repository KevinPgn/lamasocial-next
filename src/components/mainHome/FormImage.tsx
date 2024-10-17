"use client"
import { OurFileRouter } from "@/app/api/uploadthing/core"
import { UploadDropzone } from "@uploadthing/react"
export const FormImage = ({setImage, image, setIsActive}: {setImage: (image: string) => void, image: string, setIsActive: (isActive: boolean) => void}) => {
  
  return <div 
  onClick={() => setIsActive(false)}  
  className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
    <div
    onClick={(e) => e.stopPropagation()}
    className="bg-white rounded-md p-4">
        <UploadDropzone<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
        if(res) {
            setImage(res[0].url)
        }
        }}
        onUploadError={(error: Error) => {
        console.log(error)
        }}
        />
    </div>
  </div>
}