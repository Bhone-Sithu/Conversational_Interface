import Image from "next/image";
import NavPanel from "./components/NavPanel";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <main className="bg-slate-200 h-screen">
      <TopNav />
      <div className="p-8">
        <h1>Inbox</h1>
        <p>
          Total: 128 <span className=" text-orange-300">Unread: 24</span>
        </p>
      </div>
    </main>
  );
}
