import { getSession } from "../utils/CacheSession"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <aside className="w-[20%] xl:block hidden">
    
  </aside>
}