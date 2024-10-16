import { getSession } from "../utils/CacheSession"
import { Profile } from "./Profile"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <aside className="w-[19%] xl:block hidden">
    <Profile session={session} />
  </aside>
}