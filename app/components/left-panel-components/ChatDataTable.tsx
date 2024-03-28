import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { CheckBox, MoreVertOutlined } from "@mui/icons-material";
import Image from "next/image";
import User from "../../models/UserModel";
import { LeadStatus } from "../../models/LeadStatusEnum";
import { useAppSelector, useAppDispatch } from "../../../lib/hook";
import { openChatDialog } from "@/lib/features/dialogSlice";
import LeadStatusChip from "../LeadStatusChip";

interface Props {
  UserData: Array<User>;
}
function ChatDataTable({ UserData }: Props) {
  const dispatch = useAppDispatch();
  const chatId = useAppSelector((state) => state.chatDialog.id); // Accessing state managed by your slice

  const handleButtonClick = () => {
    // Dispatch the action to open the chat dialog with a new ID
    dispatch(openChatDialog(chatId + 1)); // Pass the new ID as an argument to the action creator
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <FormControlLabel control={<Checkbox />} label="Lead" />
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Campaign</TableCell>
            <TableCell align="right">Sender</TableCell>
            <TableCell align="right">Last Message</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((user) => (
            <TableRow
              className="pointer"
              hover
              onClick={(event) => dispatch(openChatDialog(user.id))}
              key={user.id}
            >
              <TableCell component="th" scope="row">
                <div className="flex items-center">
                  <Checkbox />
                  <Image
                    className=" rounded-full w-16"
                    src={user.receiverImage}
                    width={200}
                    height={200}
                    alt="Receiver Image"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col w-full">
                  {" "}
                  <h1 className="text-lg leading-none">{user.name}</h1>
                  <p className="text-xs text-slate-500">{user.position}</p>{" "}
                </div>
              </TableCell>
              <TableCell align="right">
                <LeadStatusChip status={user.leadStatus} />
              </TableCell>
              <TableCell align="right">{user.campaign}</TableCell>
              <TableCell align="right">
                {" "}
                <Image
                  className="border rounded-full h-12"
                  src={user.senderImage}
                  width={50}
                  height={50}
                  alt="Receiver Image"
                />
              </TableCell>
              <TableCell align="right">
                <p>
                  {user.lastTime
                    .toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                    .toString()}
                </p>
              </TableCell>
              <TableCell>
                <MoreVertOutlined />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ChatDataTable;
