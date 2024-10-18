"use client"
import { Button } from "@/components/ui/button"
import { followUser } from "@/server/FollowUser.action"
export const FollowBtn = ({userId, isFollowing}: {userId: string, isFollowing: boolean}) => {
  const handleFollow = async () => {
    const test = await followUser({userId})
    console.log(test)
  }
  
  return <>
    {isFollowing ? (
      <Button variant="destructive" className="w-[50%]" onClick={handleFollow}>Unfollow</Button>
    ) : (
      <Button className="w-[50%]" onClick={handleFollow}>Follow</Button>
    )}
  </>
}