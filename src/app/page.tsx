import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "@/components/sidebarRight/SidebarRight";

export default function Home() {
  return (
    <div className="flex max-w-[1500px] mx-auto gap-6 my-5">
      <SidebarLeft />
      <main className="w-full xl:w-[56%]">
        
      </main>
     <SidebarRight />
    </div>
  );
}
