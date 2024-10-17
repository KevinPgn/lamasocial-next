import {formatDistance} from "date-fns"
import { Flame, MessageCircle, Send } from "lucide-react"
import { CommentForm } from "./CommentForm"
import { LikePost } from "./LikePost"

export const Post = ({post, currentUserConnected}: {post: any, currentUserConnected: any}) => {
  return <div className="w-full shadow-md gap-5 bg-white rounded-lg p-4 my-8">
    <div className="flex items-center gap-3">
        <img src={post.author.image} alt="User profile" className="w-9 h-9 rounded-full" />
        <div>
            <h1 className="text-md font-semibold">{post.author.name}</h1>
            <p className="text-sm text-gray-500">{formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}</p>
        </div>
    </div>
    {post.title ? <h1 className="text-lg font-semibold my-3">{post.title}</h1> : null}
    {post.image ? <img src={post.image} alt="Post image" className="w-full h-[450px] object-cover my-3 rounded-lg" /> : null}
    <p className="text-md font-medium">{post.content}</p>

    <div className="flex items-center justify-between my-5">
        <div className="flex items-center gap-7">
            {/* number of likes and comments */}
            <LikePost postId={post.id} isLiked={post.isLiked} postLikes={post._count.likes}/>
            <div className="flex items-center gap-2 p-2 px-3 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 duration-75">
                <MessageCircle size={20} className="text-blue-500" />
                <div className="w-[1px] h-[20px] bg-blue-700"></div>
                <span className="text-sm font-semibold text-blue-500">{post._count.comments} comments</span>
            </div>
        </div>
        {/* Share button */}
        <div className="flex items-center gap-2 p-2 px-3 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 duration-75">
            <Send size={20} className="text-green-500" />
            <div className="w-[1px] h-[20px] bg-green-700"></div>
            <span className="text-sm font-semibold text-green-500">Share</span>
        </div>
    </div>

    {currentUserConnected ? <CommentForm postId={post.id} userImage={currentUserConnected.user.image}/> : null}
  </div>
}