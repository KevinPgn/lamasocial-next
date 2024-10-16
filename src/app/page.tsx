import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";

export default function Home() {
  return (
    <div className="flex max-w-[1500px] mx-auto gap-6 my-10">
      <SidebarLeft />

      <main className="w-full xl:w-[56%]">
        
      </main>

      <aside className="w-[25%] hidden xl:block">

      </aside>

    </div>
  );
}
