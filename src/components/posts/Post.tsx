import {formatDistance} from "date-fns"
import { Flame, MessageCircle, Send } from "lucide-react"
import { CommentForm } from "./CommentForm"
import { LikePost } from "./LikePost"
import { SharePost } from "./SharePost"

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
    {post.image ? <img src={post.image} alt="Post image" loading="lazy" className="w-full h-[450px] object-cover my-3 rounded-lg" /> : null}
    <p className="text-md font-medium my-2">{post.content}</p>

    <div className="flex items-center justify-between my-5 w-full">
        <div className="flex items-center gap-7 w-full">
            {/* number of likes and comments */}
            <LikePost postId={post.id} isLiked={post.isLiked} postLikes={post._count.likes}/>
            <div className="flex items-center gap-2 p-2 px-3 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 duration-75">
                <MessageCircle size={20} className="text-blue-500" />
                <div className="w-[1px] h-[20px] bg-blue-700"></div>
                <span className="text-sm font-semibold text-blue-500">{post._count.comments} comments</span>
            </div>
        </div>
        <SharePost postId={post.id} />
    </div>

    {currentUserConnected ? <CommentForm postId={post.id} userImage={currentUserConnected.user.image}/> : null}

    {post.comments.map((comment: any) => (
        <div className="flex flex-col gap-3 p-3 my-3">
            <div className="flex items-start gap-4">
                <img src={comment.author.image} alt="User profile" className="w-9 h-9 rounded-full" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <h1 className="text-sm font-semibold">{comment.author.name}</h1>
                        <p className="text-sm text-gray-500">{formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}</p>
                    </div>
                    <p className="text-sm mt-2 font-medium">{comment.content}</p>
                </div>
            </div>
        </div>
    ))}
  </div>
}