import { Button } from "@/components/ui/button"
import { sendFriendRequest } from "@/server/FriendShip.action"

export const AddFriend = ({userId}: {userId: string}) => {
  const handleAddFriend = async () => {
    await sendFriendRequest({userId})
  }
  
  return <>
    <Button className="w-[50%]" onClick={handleAddFriend}>Add Friend</Button>
  </>
}