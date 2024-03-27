import Image from "next/image";
import NavPanel from "./components/NavPanel";
import TopNav from "./components/TopNav";
import LeftPanel from "./components/LeftPanel";

export default function Home() {
  return (
    <main className="bg-slate-200">
      <TopNav />
      {/* Container for content */}
      <div className="p-8">
        <div className="my-5">
          <h1>Inbox</h1>
          <p>
            Total: 128 <span className=" text-orange-300">Unread: 24</span>
          </p>
        </div>
        {/* Container for panels */}
        <div className="flex">
          <LeftPanel />
        </div>
      </div>
    </main>
  );
}
