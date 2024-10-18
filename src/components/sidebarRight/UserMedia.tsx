export const UserMedia = ({ postMedia }: { postMedia: any }) => {
 
 return <div className="w-full bg-white rounded-lg p-4">
    <h2 className="text-lg font-bold mb-4">Media</h2>
    {postMedia.map((image: any) => (
      <img src={image.image} alt="image" className="w-[100px] h-[100px] object-cover rounded-lg" />
    ))}
  </div>
}