//! name, bio, living, job, school, website, image => les données de l'utilisateur via le props profileInformations
import { MapPin, GraduationCap, Briefcase, Link, Calendar } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"

export const UserProfile = ({ profileInformations, currentUserConnected }: { profileInformations: any, currentUserConnected?: any }) => {
  return <div className="w-full flex flex-col gap-3 shadow-md bg-white rounded-md p-4">
    <span className="text-sm font-semibold text-gray-500">User information</span>
    <div className="flex items-center gap-3">
      <h2 className="text-lg font-medium">{profileInformations.name}</h2>
      <p className="text-md font-semibold text-gray-500">@{profileInformations.name}</p>
    </div>

    {profileInformations.bio ? ( <p className="text-md font-semibold text-gray-500">{profileInformations.bio}</p> ) : <p className="text-sm text-gray-500">Aucune bio</p>}

    <div className="flex items-center gap-2">
      <MapPin size={16} className="text-gray-500" />
      <p className="text-sm text-gray-500">{profileInformations.living ? profileInformations.living : "Aucune ville"}</p>
    </div>
    {/* school */}
    <div className="flex items-center gap-2">
      <GraduationCap size={16} className="text-gray-500" />
      <p className="text-sm text-gray-500">{profileInformations.school ? profileInformations.school : "Aucune école"}</p>
    </div>
    {/* job */}
    <div className="flex items-center gap-2">
      <Briefcase size={16} className="text-gray-500" />
      <p className="text-sm text-gray-500">{profileInformations.job ? profileInformations.job : "Aucun job"}</p>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link size={16} className="text-gray-500" />
        <p className="text-sm text-gray-500">{profileInformations.website ? profileInformations.website : "Aucun site web"}</p>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-gray-500" />
       <p className="text-sm text-gray-500">Joined : {format(new Date(profileInformations.createdAt), "dd/MM/yyyy")}</p>
      </div>
    </div>
      {currentUserConnected?.id === profileInformations.id ? (
        <Button className="w-full mt-3">Edit profile</Button>
      ) : (
        <div className="flex items-center gap-2 mt-3">
          <Button className="w-[50%]">Add friend</Button>
          <Button className="w-[50%]">Follow</Button>
        </div>
      )}
  </div>
}