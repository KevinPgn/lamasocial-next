import { SidebarLeft } from '@/components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '@/components/sidebarRight/SidebarRight'
import { getUserProfileWithPosts } from '@/server/GetUserProfile.action'

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
  const { profile, posts } = await getUserProfileWithPosts(params.userId)

  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[53%]">
        
      </main>

      <SidebarRight profile={profile}/>
    </div>
  )
}

export default UserProfilePage