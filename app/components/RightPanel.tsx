import React from "react";

import User, { Message } from "../models/UserModel";
import ChatHeading from "./right-panel-components/ChatHeading";
import ChatPanel from "./right-panel-components/ChatPanel";
import ChatSend from "./right-panel-components/ChatSend";

interface Props {
  UserData: User;
}

function RightPanel({ UserData }: Props) {
  const ChatList: Array<Message> = UserData.messageList;
  return (
    <div className="w-1/2  p-3 bg-white over">
      <ChatHeading UserData={UserData} />
      <br />
      <ChatPanel UserData={UserData} />
      <ChatSend />
    </div>
  );
}

export default RightPanel;
