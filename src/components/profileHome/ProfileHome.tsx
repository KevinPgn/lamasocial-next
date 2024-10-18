import Image from "next/image"
import { Post } from "../posts/Post"

export const ProfileHome = ({ profileInformations, posts, currentUserConnected }: { profileInformations: any, posts: any, currentUserConnected: any }) => {
  return <>
    <div className="relative w-full h-[270px] bg-gray-200 rounded-md">
        <Image src="/banner.jpg" alt="banner" fill className="object-cover h-full rounded-md" />
        <img src={profileInformations.image} alt="profile" className="w-28 h-28 rounded-full absolute bottom-0 translate-y-1/2 left-[50%] -translate-x-1/2 border-4 border-white" />
    </div>
    <span className="text-xl font-bold flex items-center justify-center mt-16">{profileInformations.name}</span>
    {/* number of posts, followers, following */}
    <div className="flex items-center justify-center gap-7 mt-4">
        <div className="flex items-center flex-col gap-1">
            <span className="font-bold text-lg">{posts.length}</span>
            <span className="text-sm font-medium text-gray-500">posts</span>
        </div>
        <div className="flex items-center flex-col gap-1">
            <span className="font-bold text-lg">{profileInformations._count.followers}</span>
            <span className="text-sm font-medium text-gray-500">followers</span>
        </div>
        <div className="flex items-center flex-col gap-1">
            <span className="font-bold text-lg">{profileInformations._count.following}</span>
            <span className="text-sm font-medium text-gray-500">following</span>
        </div>
    </div>

    {posts.map((post: any) => (
        <Post key={post.id} post={post} currentUserConnected={currentUserConnected} />
    ))}
  </>
}