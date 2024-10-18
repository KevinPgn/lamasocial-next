import { SidebarLeft } from '@/components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '@/components/sidebarRight/SidebarRight'
import { getUserProfileWithPosts } from '@/server/GetUserProfile.action'
import { getSession } from '@/components/utils/CacheSession'
import { ProfileHome } from '@/components/profileHome/ProfileHome'

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
  const session = await getSession()
  const currentUserId = session?.user?.id
  const { profile, posts } = await getUserProfileWithPosts(params.userId)

  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[53%]">
        <ProfileHome profileInformations={profile} posts={posts} currentUserId={currentUserId || ""} />
      </main>

      <SidebarRight profile={profile} currentUserId={currentUserId}/>
    </div>
  )
}

export default UserProfilePage