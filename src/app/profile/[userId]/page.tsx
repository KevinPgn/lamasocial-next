import { SidebarLeft } from '@/components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '@/components/sidebarRight/SidebarRight'
import { getUserProfileWithPosts } from '@/server/GetUserProfile.action'
import { getSession } from '@/components/utils/CacheSession'
import { ProfileHome } from '@/components/profileHome/ProfileHome'

interface UserProfilePageProps {
  params: Promise<{
    userId: string
  }>
}

const UserProfilePage = async (props: UserProfilePageProps) => {
  const { userId } = await props.params
  const session = await getSession()
  const { profile, posts, media } = await getUserProfileWithPosts(userId)

  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[53%]">
        <ProfileHome profileInformations={profile} posts={posts} currentUserConnected={session} />
      </main>

      <SidebarRight profile={profile} currentUserConnected={session} postMedia={media}/>
    </div>
  )
}

export default UserProfilePage