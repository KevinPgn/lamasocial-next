"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <Menu size={25} className="cursor-pointer text-[#E0FFE0] duration-75" onClick={() => setIsOpen(!isOpen)} />

    {isOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-[#181616]/70 backdrop-blur-sm flex flex-col items-center justify-center gap-7">
           <X size={25} className="cursor-pointer text-[#E0FFE0] duration-75 absolute top-5 right-5" onClick={() => setIsOpen(!isOpen)} />
           <Link href="/" className="text-xl font-bold text-[#E0FFE0] uppercase">Home</Link>     
           <Link href="/friends" className="text-xl font-bold text-[#E0FFE0] uppercase">Friends</Link>     
           <Link href="/stories" className="text-xl font-bold text-[#E0FFE0] uppercase">Stories</Link>     
           <Link href="/notifications" className="text-xl font-bold text-[#E0FFE0] uppercase">Notifications</Link>     
           <Link href="/messages" className="text-xl font-bold text-[#E0FFE0] uppercase">Messages</Link>     
      </div>
    )}
  </>
}