"use client"
import {Home, Users2, Plus} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const Links = () => {
  const pathname = usePathname()

  return <div className="flex items-center gap-8 max-lg:hidden text-black">
    <Link href="/" className={cn("flex items-center gap-2 text-sm hover:text-blue-500 duration-75", {
      "text-blue-500": pathname === "/"
    })}>
      <Home size={20} />
      <span>Homepage</span>
    </Link>
    
    <Link href="/friends" className={cn("flex items-center gap-2 text-sm hover:text-blue-500 duration-75", {
      "text-blue-500": pathname === "/friends"
    })}>
      <Users2 size={20} />
      <span>Friends</span>
    </Link>

    <Link href="/stories" className={cn("flex items-center gap-2 text-sm hover:text-blue-500 duration-75", {
      "text-blue-500": pathname === "/stories"
    })}>
      <div className="rounded-full p-1 border-dashed border border-black">
        <Plus size={13} />
      </div>
      <span>Stories</span>
    </Link>
  </div>
}