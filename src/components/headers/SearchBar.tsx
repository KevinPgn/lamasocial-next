"use client"
import { Search } from "lucide-react"
import {Input} from "@/components/ui/input"

export const SearchBar = () => {
  return <div className="flex items-center gap-2 w-[200px] bg-[#121212] rounded-lg px-3 max-lg:hidden">
      <Input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none"/>
      <Search size={18} className="cursor-pointer"/>
    </div>
}