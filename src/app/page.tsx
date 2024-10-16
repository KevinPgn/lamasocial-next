import { Stories } from "@/components/mainHome/Stories";
import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "@/components/sidebarRight/SidebarRight";

export default function Home() {
  return (
    <div className="flex max-w-[1500px] mx-auto gap-8 my-5">
      <SidebarLeft />
      <main className="w-full xl:w-[55%]">
        <Stories />
      </main>
     <SidebarRight />
    </div>
  );
}
