import React, { useState } from "react";
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
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ImageIcon from "@mui/icons-material/Image";
import { useAppDispatch } from "@/lib/hook";
import User, { Message } from "@/app/models/UserModel";
import { sendMessage } from "@/lib/features/userDataSlice";
import { AddCircleOutline } from "@mui/icons-material";

interface Props {
  UserData: User;
}
function ChatSend({ UserData }: Props) {
  const [sendText, setSendText] = useState("");
  const [replyType, setReplyType] = useState("");
  const [ChatList, setChatList] = useState(UserData.messageList);

  const dispatch = useAppDispatch();
  const sendChat = () => {
    const message: Message = {
      message: sendText,
      destination: "to",
      time: new Date(),
      variant: 1,
      replyType: replyType,
      isAiAssited: true,
      sentVia: "LinkedIn",
    };
    const updatedUserData = { ...UserData };

    updatedUserData.messageList = [...updatedUserData.messageList, message];
    setSendText("");
    dispatch(sendMessage(updatedUserData));
  };
  return (
    <div className="p-3 grid grid-cols-3 gap-3 w-full">
      <FormControl className="col-span-full sm:col-span-1">
        <InputLabel id="demo-simple-select-label">Reply Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Reply Type"
          onChange={(e) => setReplyType(e.target.value + "")} // to convert into string
        >
          <MenuItem value={"Ice Breaker"} selected>
            Ice Breaker
          </MenuItem>
          <MenuItem value={"Candy Crusher"}>Candy Crusher</MenuItem>
          <MenuItem value={"Honey Keeper"}>Honey Keeper</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup
        aria-label="Large button group"
        className="col-span-full w-full sm:col-span-2 ml-auto h-14"
        color="secondary"
      >
        <Button
          style={{ backgroundColor: "#7b0035", color: "white" }}
          className="w-full"
        >
          Variant 1
        </Button>
        ,
        <Button key="one" className="w-full">
          Variant 2
        </Button>
        ,
        <Button key="one" className="w-full">
          Variant 3
        </Button>
        ,
      </ButtonGroup>
      <div className="relative col-span-full">
        <TextField
          id="outlined-multiline-static"
          label="Type Something..."
          className=""
          multiline
          fullWidth
          rows={8}
          value={sendText}
          onChange={(e) => setSendText(e.target.value)}
        />
        <div className="w-full flex justify-between absolute px-3 bottom-3">
          <div className="flex gap-3">
            <p className="text-2xl border-2 px-2 py-1 border-gray-400 rounded-md">
              &#128513;
            </p>
            <AddIcon
              style={{ fontSize: "3.1rem" }}
              className="text-6xl border-2 px-2 py-1 border-gray-400 rounded-md"
            />
            <ImageIcon
              style={{ fontSize: "3.1rem" }}
              className="text-2xl border-2 px-2 py-1 border-gray-400 rounded-md"
            />
          </div>
          <div className="bg-gray-200 rounded-full py-3 px-3 text-xs shadow-md">
            <p className=" hidden sm:inline-block">Regenerate Response</p>
            <AutorenewIcon />
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        startIcon={<SendIcon />}
        className="col-span-full"
        onClick={sendChat}
      >
        Send
      </Button>
    </div>
  );
}

export default ChatSend;
