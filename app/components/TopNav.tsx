import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
function TopNav() {
  return (
    <nav className="bg-white gap-3 p-3 flex w-full justify-end h-fit">
      <NotificationsNoneIcon />
      <ChatBubbleOutlineIcon />
      <CircleOutlinedIcon />
      <PowerSettingsNewOutlinedIcon />
    </nav>
  );
}

export default TopNav;
