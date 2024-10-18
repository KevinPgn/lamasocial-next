import { Button } from "@/components/ui/button"
import { sendFriendRequest } from "@/server/FriendShip.action"

export const AddFriend = ({userId, isFriend}: {userId: string, isFriend: boolean}) => {
  const handleAddFriend = async () => {
    await sendFriendRequest({userId})
  }
  
  return <>
    <Button className="w-[50%]" onClick={handleAddFriend}>{isFriend ? "Remove Friend" : "Add Friend"}</Button>
  </>
}