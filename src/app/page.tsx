import { SidebarLeft } from "@/components/sidebarLeft/SidebarLeft";

export default function Home() {
  return (
    <div className="flex max-w-[1500px] mx-auto gap-6">
      <SidebarLeft />
      <main className="bg-[#181616] w-full xl:w-[55%]">
        <h1 className="text-xl font-bold text-[#E0FFE0] uppercase">Home</h1>
      </main>
      <aside className="w-[25%] bg-[#181616] h-screen hidden xl:block">

      </aside>
    </div>
  );
}
