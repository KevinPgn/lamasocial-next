"use client"
import { ArrowsUpFromLine, Activity, Store, Calendar, Album, Clapperboard, Newspaper, Soup, ScrollText, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const LinksSidebar = () => {
  const pathname = usePathname()

  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/" && "bg-gray-100")}>
        <ArrowsUpFromLine size={20} className={cn("text-gray-500", pathname === "/" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/" && "text-blue-500")}>My Posts</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/activity" && "bg-gray-100")}>
        <Activity size={20} className={cn("text-gray-500", pathname === "/activity" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/activity" && "text-blue-500")}>Activity</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/marketplace" && "bg-gray-100")}>
        <Store size={20} className={cn("text-gray-500", pathname === "/marketplace" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/marketplace" && "text-blue-500")}>Marketplace</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/events" && "bg-gray-100")}>
        <Calendar size={20} className={cn("text-gray-500", pathname === "/events" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/events" && "text-blue-500")}>Events</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/albums" && "bg-gray-100")}>
        <Album size={20} className={cn("text-gray-500", pathname === "/albums" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/albums" && "text-blue-500")}>Albums</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/videos" && "bg-gray-100")}>
        <Clapperboard size={20} className={cn("text-gray-500", pathname === "/videos" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/videos" && "text-blue-500")}>Videos</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/news" && "bg-gray-100")}>
        <Newspaper size={20} className={cn("text-gray-500", pathname === "/news" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/news" && "text-blue-500")}>News</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/courses" && "bg-gray-100")}>
        <Soup size={20} className={cn("text-gray-500", pathname === "/courses" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/courses" && "text-blue-500")}>Courses</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/lists" && "bg-gray-100")}>
        <ScrollText size={20} className={cn("text-gray-500", pathname === "/lists" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/lists" && "text-blue-500")}>Lists</span>
    </div>
    <div className={cn("flex items-center gap-3 p-2 hover:bg-gray-100 duration-75 rounded-md cursor-pointer", pathname === "/settings" && "bg-gray-100")}>
        <Settings size={20} className={cn("text-gray-500", pathname === "/settings" && "text-blue-500")}/>
        <span className={cn("text-md text-gray-500", pathname === "/settings" && "text-blue-500")}>Settings</span>
    </div>
  </div>
}