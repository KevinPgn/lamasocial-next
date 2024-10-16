import { Button } from "../ui/button"

export const Profile = ({session}: {session: any}) => {
  return <>
    <div className="w-full shadow-md bg-white rounded-md p-4">
      {/* banner + image profile */}
      <div className="w-full h-[80px] rounded-md bg-gray-200 relative mb-8">
        <img 
          src={session?.user?.image || ""} 
          alt="profile" 
          loading="lazy" 
          className="w-[60px] h-[60px] rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 border-4 border-white" 
        />
      </div>
      <p className="text-center font-bold text-lg">{session?.user?.name}</p>

      <div className="flex items-center justify-evenly gap-4 mt-2">
        <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
        </div>

        <span className="text-xs font-medium">100 followers</span>
      </div>
      <Button className="w-fit flex items-center justify-center mx-auto bg-blue-500 hover:bg-blue-600 duration-75 mt-4">My Profile</Button>
    </div>
  </>
}