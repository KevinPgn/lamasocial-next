import { FormPost } from "@/components/mainHome/FormPost";
import { Stories } from "@/components/mainHome/Stories";
import { Post } from "@/components/posts/Post";
import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "@/components/sidebarRight/SidebarRight";
import { getSession } from "@/components/utils/CacheSession";
import { getAllPosts } from "@/server/GetPost.action";
import { getAllFriendsRequests } from "@/server/FriendShip.action";

export default async function Home() {
  const session = await getSession()
  const posts = await getAllPosts()
  const friendsRequests = await getAllFriendsRequests({})

  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[53%]">
        <Stories sessionImage={session?.user?.image || ""} />
        <FormPost sessionImage={session?.user?.image || ""} />
        {posts.map((post) => (
          <Post key={post.id} post={post} currentUserConnected={session}/>
        ))}
      </main>

      <SidebarRight friendsRequests={friendsRequests}/>
    </div>
  );
}
