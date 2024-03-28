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
import { useAppDispatch } from "@/lib/hook";
import User, { Message } from "@/app/models/UserModel";
import { sendMessage } from "@/lib/features/userDataSlice";

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
      replyType: "Ice Breaker",
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
      <FormControl fullWidth>
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
        size="large"
        aria-label="Large button group"
        className=" col-span-2 ml-auto "
        color="secondary"
      >
        <Button style={{ backgroundColor: "#7b0035", color: "white" }}>
          Variant 1
        </Button>
        ,<Button key="one">Variant 2</Button>,
        <Button key="one">Variant 3</Button>,
      </ButtonGroup>
      <TextField
        id="outlined-multiline-static"
        label="Type Something..."
        className="col-span-full"
        multiline
        rows={4}
        value={sendText}
        onChange={(e) => setSendText(e.target.value)}
      />
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
