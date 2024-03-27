"use client";
import React from "react";
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

import UserData from "../data/demo";
import ChatRow from "./left-panel-components/ChatDataTable";
import ChatDataTable from "./left-panel-components/ChatDataTable";
function LeftPanel() {
  return (
    <div className="w-1/2 bg-white h-full p-5">
      {/* Filter Section */}
      <div className="flex gap-4">
        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Campaign</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10} selected>
              All
            </MenuItem>
            <MenuItem value={20}>UI/UX designer in Bangkok</MenuItem>
            <MenuItem value={20}>Web Developer in Bangkok</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10} selected>
              All
            </MenuItem>
            <MenuItem value={20}>UI/UX designer in Bangkok</MenuItem>
            <MenuItem value={20}>Web Developer in Bangkok</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Lead Status</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10} selected>
              All
            </MenuItem>
            <MenuItem value={20}>UI/UX designer in Bangkok</MenuItem>
            <MenuItem value={20}>Web Developer in Bangkok</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex justify-between my-5">
        <p>Selected: 0</p>
        <div className="flex gap-5">
          <Send />
          <Autorenew />
          <Mail />
          <Drafts />
          <CreateOutlined />
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
