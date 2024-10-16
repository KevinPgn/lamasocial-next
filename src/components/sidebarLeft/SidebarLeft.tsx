import { Publicity } from "@/features/layout/Publicity"
import { getSession } from "../utils/CacheSession"
import { LinksSidebar } from "./LinksSidebar"
import { Profile } from "./Profile"
// TODO: add dynamic followers to <Profile />

export const SidebarLeft = async () => {
  const session = await getSession()

  return <aside className="w-[19%] xl:flex flex-col gap-4 hidden">
    <Profile session={session} />
    <LinksSidebar />
    <Publicity />
  </aside>
}