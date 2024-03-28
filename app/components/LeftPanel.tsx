"use client";
import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TableContainer,
  TableRow,
  Table,
  TableCell,
  TableBody,
  TableHead,
  Paper,
} from "@mui/material";
import {
  Send,
  Autorenew,
  Mail,
  Drafts,
  CreateOutlined,
} from "@mui/icons-material";

import importData from "../data/demo";
import ChatDataTable from "./left-panel-components/ChatDataTable";

function LeftPanel() {
  const [UserData, setStateUserData] = useState(importData);
  const [searchText, setsearchText] = useState("");
  const leadStatusFilter = (status: string) => {
    let filterUserData = importData.filter(
      (user) => user.leadStatus === status || status === ""
    );
    setStateUserData(filterUserData);
  };
  const campaignFilter = (campaign: string) => {
    let filterUserData = importData.filter(
      (user) => user.campaign === campaign || campaign === ""
    );
    setStateUserData(filterUserData);
  };
  const textFilter = (text: string) => {
    let searchText = text.toLowerCase();
    let filterUserData = importData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.position.toLowerCase().includes(searchText) ||
        user.campaign.toLowerCase().includes(searchText)
    );
    setsearchText(text);
    setStateUserData(filterUserData);
  };

  return (
    <div className="w-full lg:w-1/2 bg-white h-full lg:min-h-[65rem] p-5 shadow-xl rounded-md">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(e) => textFilter(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="campaign">Campaign</InputLabel>
          <Select
            labelId="campaign"
            id="campaign-select"
            label="Campaign"
            onChange={(e) => campaignFilter(e.target.value + "")}
          >
            <MenuItem value={""} selected>
              All
            </MenuItem>
            <MenuItem value={"UI/UX designers in Bangkok"}>
              UI/UX designers in Bangkok
            </MenuItem>
            <MenuItem value={"Developers in New York"}>
              Developers in New York
            </MenuItem>
            <MenuItem value={"Product Managers in San Francisco"}>
              Product Managers in San Francisco
            </MenuItem>
            <MenuItem value={"Software Engineers in Silicon Valley"}>
              Software Engineers in Silicon Valley
            </MenuItem>
            <MenuItem value={"Marketing Professionals in Chicago"}>
              Marketing Professionals in Chicago
            </MenuItem>
            <MenuItem value={"Project Managers in Los Angeles"}>
              Project Managers in Los Angeles
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="lead-status">Lead Status</InputLabel>
          <Select
            labelId="lead-status"
            id="lead-status-label"
            label="Lead Status"
            onChange={(e) => leadStatusFilter(e.target.value + "")}
          >
            <MenuItem value={""} selected>
              All
            </MenuItem>
            <MenuItem value={"Qualified Lead"}>Qualified Lead</MenuItem>
            <MenuItem value={"Interested"}>Interested</MenuItem>
            <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
            <MenuItem value={"Referral"}>Referral</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex justify-between my-5">
        <p>Selected: 0</p>
        <div className="flex gap-5">
          <Send className=" opacity-50" fontSize="small" />
          <Autorenew className=" opacity-50" fontSize="small" />
          <Mail className=" opacity-50" fontSize="small" />
          <Drafts className=" opacity-50" fontSize="small" />
          <CreateOutlined className=" opacity-50" fontSize="small" />
        </div>
      </div>

      <div className="flex">
        <FormControlLabel control={<Checkbox />} label="Unread" />
        <FormControlLabel control={<Checkbox />} label="Unreplied" />
        <FormControlLabel control={<Checkbox />} label="Drafting" />
      </div>

      {/* Data Table Section */}
      <ChatDataTable UserData={UserData} />
    </div>
  );
}

export default LeftPanel;
