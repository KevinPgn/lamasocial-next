import { FormPost } from "@/components/mainHome/FormPost";
import { Stories } from "@/components/mainHome/Stories";
import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "@/components/sidebarRight/SidebarRight";
import { getSession } from "@/components/utils/CacheSession";

export default async function Home() {
  const session = await getSession()

  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />

      <main className="w-full xl:w-[55%]">
        <Stories sessionImage={session?.user?.image || ""} />
        <FormPost sessionImage={session?.user?.image || ""} />
      </main>

     <SidebarRight />
    </div>
  );
}
