import { SignInButton } from "@/features/auth/SignInButton"
import {Users2, MessageCircleMore, Bell} from "lucide-react"

export const IconAndProfile = ({session}: {session: any}) => {
  return <div className="flex items-center gap-6 max-lg:hidden">  
      <Users2 size={22} className="cursor-pointer text-gray-400 hover:text-[#E0FFE0] duration-75"/>
      <MessageCircleMore size={22} className="cursor-pointer text-gray-400 hover:text-[#E0FFE0] duration-75"/>
      <Bell size={22} className="cursor-pointer text-gray-400 hover:text-[#E0FFE0] duration-75"/>
        
      {!session ? (
        <SignInButton variant="default" bgColor="bg-purple-400" />
      ) : (
        <img src={session.user.image} alt="profile" width={28} height={28} loading="lazy" className="rounded-full cursor-pointer" />
      )}
    </div>
}