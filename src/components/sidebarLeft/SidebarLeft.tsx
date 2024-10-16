import { getSession } from "../utils/CacheSession"
import { LinksSidebar } from "./LinksSidebar"
import { Profile } from "./Profile"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <aside className="w-[19%] xl:block hidden flex flex-col gap-4">
    <Profile session={session} />
    <LinksSidebar />
  </aside>
}