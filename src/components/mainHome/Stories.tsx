import { Plus } from "lucide-react"

export const Stories = () => {
  return <div className="w-full shadow-md gap-5 bg-white rounded-md p-4 flex items-center justify-between overflow-x-auto">
        {/* add story */}
        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-blue-200 flex items-center justify-center">
            <Plus size={40} className="text-blue-500" />
          </div>
          <span className="text-sm font-semibold">Add a Story</span>
        </div>

        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-pink-200 flex items-center justify-center"> </div>
          <span className="text-sm font-semibold">John Doe</span>
        </div>

        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-green-200 flex items-center justify-center"> </div>
          <span className="text-sm font-semibold">John Doe</span>
        </div>

        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-yellow-200 flex items-center justify-center"> </div>
          <span className="text-sm font-semibold">John Doe</span>
        </div>

        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-red-200 flex items-center justify-center"> </div>
          <span className="text-sm font-semibold">John Doe</span>
        </div>

        <div className="flex items-center flex-col gap-3 cursor-pointer">
          <div className="w-[90px] h-[90px] rounded-full bg-purple-200 flex items-center justify-center"> </div>
          <span className="text-sm font-semibold">John Doe</span>
        </div>
  </div>
}