import { Button } from "@/components/ui/button"
import { deleteTheFriendship, sendFriendRequest } from "@/server/FriendShip.action"

export const AddFriend = ({userId, isFriend}: {userId: string, isFriend: boolean}) => {
  const handleAddFriend = async () => {
    await sendFriendRequest({userId})
  }
  const handleRemoveFriend = async () => {
    await deleteTheFriendship({userId})
  }

  if(isFriend) {
    return <Button className="w-[50%]" onClick={handleRemoveFriend}>Remove Friend</Button>
  }
  
  return <>
    <Button className="w-[50%]" onClick={handleAddFriend}>Add Friend</Button>
  </>
}