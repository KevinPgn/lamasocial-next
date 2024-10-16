"use client"
import { Check, X } from "lucide-react"
export const FriendsRequests = () => {
  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-500">Friends Requests</h3>
        <span className="text-sm text-blue-500 cursor-pointer font-medium">See All</span>
    </div>

    <div className="flex flex-col gap-3" >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                <span className="text-sm font-medium text-gray-500">John Doe</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 cursor-pointer">
                    <Check size={17} className="text-green-500" />
                </div>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 cursor-pointer">
                    <X size={17} className="text-red-500" />
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100"></div>
                <span className="text-sm font-medium text-gray-500">John Doe</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 cursor-pointer">
                    <Check size={17} className="text-green-500" />
                </div>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 cursor-pointer">
                    <X size={17} className="text-red-500" />
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100"></div>
                <span className="text-sm font-medium text-gray-500">John Doe</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 cursor-pointer">
                    <Check size={17} className="text-green-500" />
                </div>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 cursor-pointer">
                    <X size={17} className="text-red-500" />
                </div>
            </div>
        </div>
    </div>
  </div>
}