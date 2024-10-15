import { SignInButton } from "@/features/auth/SignInButton"
import {Users2, MessageCircleMore, Bell} from "lucide-react"

export const IconAndProfile = ({session}: {session: any}) => {
  return <div className="flex items-center gap-7">
      <Users2 size={22} className="cursor-pointer text-gray-400"/>
      <MessageCircleMore size={22} className="cursor-pointer text-gray-400"/>
      <Bell size={22} className="cursor-pointer text-gray-400"/>
        
      {!session ? (
        <SignInButton variant="default" bgColor="bg-purple-400" />
      ) : (
        null
      )}
    </div>
}