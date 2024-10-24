import { Check, X } from "lucide-react"
import { DenyFriendRequest } from "../utilitaire/DenyFriendRequest"
import { AcceptFriendRequest } from "../utilitaire/AcceptFriendRequest"

export const FriendsRequests = ({friendsRequests}: {friendsRequests: any}) => {
  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-500">Friends Requests</h3>
        <span className="text-sm text-blue-500 cursor-pointer font-medium">See All</span>
    </div>

    <div className="flex flex-col gap-3" >
        {friendsRequests.data.map((friendRequest: any) => (
        <div key={friendRequest.sender.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                <span className="text-sm font-medium text-gray-500">{friendRequest.sender.name}</span>
            </div>
            <div className="flex items-center gap-3">
                <AcceptFriendRequest friendRequestId={friendRequest.id} />
                <DenyFriendRequest friendRequestId={friendRequest.id} />
            </div>
        </div>
        ))}
    </div>
  </div>
}