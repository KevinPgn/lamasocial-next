import { Gift } from "lucide-react"

export const Birthdays = () => {
  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <h3 className="text-sm font-semibold text-gray-500">Birthdays</h3>

    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100"></div>
            <span className="text-sm font-bold">John Doe</span>
        </div>
        <span className="text-sm p-1 bg-blue-500 px-2 rounded-md text-white cursor-pointer font-medium">Celebrate</span>
    </div>

    <div className="flex items-center gap-3 bg-gray-100 p-4 mt-3 rounded-md">
      <Gift className="w-7 h-7 text-gray-500" />

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Upcoming Birthdays</span>
        <span className="text-sm text-gray-500">See other 8 have upcoming birthdays</span>
      </div>
    </div>
  </div>
}