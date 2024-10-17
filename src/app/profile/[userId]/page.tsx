import { SidebarLeft } from '@/components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '@/components/sidebarRight/SidebarRight'

const UserProfilePage = () => {
  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[53%]">
        
      </main>

      <SidebarRight />
    </div>
  )
}

export default UserProfilePage