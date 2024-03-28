import React from "react";
import Image from "next/image";
import LeadStatusChip from "../LeadStatusChip";
import { MoreVertOutlined, Close } from "@mui/icons-material";
import User from "@/app/models/UserModel";
interface Props {
  UserData: User;
}
function ChatHeading({ UserData }: Props) {
  return (
    <div className="flex w-full p-3">
      <Image
        className=" rounded-full w-24"
        src={UserData.receiverImage}
        width={200}
        height={200}
        alt="Receiver Image"
      />
      <div className="flex flex-col flex-grow">
        <div className="flex gap-5 items-center mb-5">
          <h1 className="text-xl">{UserData.name} </h1>
          <LeadStatusChip status={UserData.leadStatus} />
        </div>

        <h2 className="text-sm text-slate-500">
          Occupation: {UserData.position}
        </h2>
        <p className="text-xs opacity-75">Company: Sales Mind AI</p>
        <p className="text-xs opacity-75">Location: Bangkok</p>
      </div>
      <MoreVertOutlined />
      <Close />
    </div>
  );
}

export default ChatHeading;
