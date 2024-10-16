import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"
import Image from "next/image"

export const Publicity = () => {
  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <div className="flex items-center justify-between">
        <span className="text-md font-bold">Sponsored Ads</span>
        <Ellipsis size={18} className="text-gray-500 cursor-pointer" />
    </div>    
    <Image src="/spaghetti.jpg" alt="publicity" width={300} height={110} className="w-full h-[110px] object-cover rounded-md" />

    <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-blue-700"></div>
        <span className="text-md font-medium text-blue-500">BigChef Lounge</span>
    </div>
    <p className="text-sm">It's an elite restaurant offering exquisite culinary delights and a cozy ambiance.</p>
    <Button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 duration-75">Learn More</Button>
  </div>
}