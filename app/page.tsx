"use client";
import NavPanel from "./components/NavPanel";
import TopNav from "./components/TopNav";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { useAppSelector, useAppDispatch } from "../lib/hook";
// import importData from "./data/demo";
import User from "./models/UserModel";

export default function Home() {
  const chatDialogId: number = useAppSelector((state) => state.chatDialog.id);
  const importData: Array<User> = useAppSelector(
    (state) => state.userData.UserData
  );
  let clickedUserData = importData.filter(
    (user) => user.id === chatDialogId
  )[0];
  return (
    <main className="bg-slate-200">
      <TopNav />
      {/* Container for content */}
      <div className="p-8">
        <div className="my-5">
          <h1 className="text-xl font-bold">Inbox</h1>
          <p>
            Total: 128 <span className=" text-orange-300 ml-5">Unread: 24</span>
          </p>
        </div>
        {/* Container for panels */}
        <div className=" flex flex-col lg:flex-row gap-5">
          <LeftPanel />
          <RightPanel UserData={clickedUserData} />
        </div>
      </div>
    </main>
  );
}
