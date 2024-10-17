import { Publicity } from "@/features/layout/Publicity"
import { getSession } from "../utils/CacheSession"
import { LinksSidebar } from "./LinksSidebar"
import { Profile } from "./Profile"
// TODO: add dynamic followers to <Profile />
import { getNumberFollow } from "./getNumberFollow.action"

export const SidebarLeft = async () => {
  const session = await getSession()
  const numberFollow = await getNumberFollow({})


  return <aside className="w-[20%] xl:flex flex-col gap-4 hidden">
    <Profile session={session} numberFollow={numberFollow?.data || 0} />
    <LinksSidebar />
    <Publicity />
  </aside>
}