import { FriendsRequests } from "./FriendsRequests"

export const SidebarRight = () => {
  return <aside className="w-[25%] xl:flex flex-col gap-4 hidden">
    <FriendsRequests />
  </aside>
}