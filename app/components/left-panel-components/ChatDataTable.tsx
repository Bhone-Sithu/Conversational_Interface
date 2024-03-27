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

interface Props {
  UserData: Array<User>;
}
function ChatDataTable({ UserData }: Props) {
  const getStatusColor = (status: string) => {
    let color;
    switch (status) {
      case LeadStatus.QL:
        color = "bg-green-500";
        break;
      case LeadStatus.I:
        color = "bg-orange-500";
        break;
      case LeadStatus.N:
        color = "bg-red-500";
        break;
      case LeadStatus.R:
        color = "bg-yellow-500";
        break;
      default:
        break;
    }
    return color;
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
            <TableRow key={user.id}>
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
                <p
                  className={` ${getStatusColor(
                    user.leadStatus
                  )} bg-green-500 text-xs rounded-full text-white p-2`}
                >
                  {user.leadStatus}
                </p>
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
