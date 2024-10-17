"use client"
import { Publicity } from "@/features/layout/Publicity"
import { Birthdays } from "./Birthdays"
import { FriendsRequests } from "./FriendsRequests"
import {usePathname} from "next/navigation"

export const SidebarRight = () => {
  const pathname = usePathname()

  return <aside className="w-[27%] xl:flex flex-col gap-4 hidden">
    {pathname === "/" ? (
      <>
        <FriendsRequests />
        <Birthdays />
      </>
    ): null}

    <Publicity />
  </aside>
}