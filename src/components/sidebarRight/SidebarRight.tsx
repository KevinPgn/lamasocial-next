"use client"
import { Publicity } from "@/features/layout/Publicity"
import { Birthdays } from "./Birthdays"
import { FriendsRequests } from "./FriendsRequests"
import {usePathname} from "next/navigation"
import { UserProfile } from "./UserProfile"

export const SidebarRight = ({ profile, currentUserConnected, friendsRequests }: { profile?: any, currentUserConnected?: any, friendsRequests?: any }) => {
  const pathname = usePathname()
  return <aside className="w-[27%] xl:flex flex-col gap-4 hidden">
    {pathname === "/" ? (
      <>
        <FriendsRequests friendsRequests={friendsRequests}/>
        <Birthdays />
      </>
    ) : null}
    {pathname.startsWith("/profile") && profile && (
        <UserProfile profileInformations={profile} currentUserConnected={currentUserConnected} />
      )}
    <Publicity />
  </aside>
}