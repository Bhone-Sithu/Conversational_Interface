import React, { useState } from "react";

import User, { Message } from "../models/UserModel";
import ChatHeading from "./right-panel-components/ChatHeading";
import ChatPanel from "./right-panel-components/ChatPanel";
import ChatSend from "./right-panel-components/ChatSend";
import { useAppSelector, useAppDispatch } from "../../lib/hook";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Button,
  TextField,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

interface Props {
  UserData: User;
}

function RightPanel({ UserData }: Props) {
  //   const ChatList: Array<Message> = UserData.messageList;

  return (
    <div
      className="w-full lg:w-1/2  lg:max-h-[65rem]  p-3 bg-white shadow-xl rounded-md"
      // style={{ maxHeight: "65rem" }}
    >
      <ChatHeading UserData={UserData} />
      <br />
      <ChatPanel UserData={UserData} />

      <ChatSend UserData={UserData} />
    </div>
  );
}

export default RightPanel;
