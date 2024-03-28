import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import NotiNumber from "./NotiNumber";
function TopNav() {
  return (
    <nav className="bg-white gap-3 p-3 flex w-full justify-end h-fit">
      <div className="relative">
        <NotificationsNoneIcon className=" opacity-50" fontSize="medium" />
        <NotiNumber count={3} />
      </div>
      <div className="relative">
        <ChatBubbleOutlineIcon className=" opacity-50" fontSize="medium" />

        <NotiNumber count={1} />
      </div>
      <CircleOutlinedIcon className=" opacity-50" fontSize="medium" />
      <PowerSettingsNewOutlinedIcon className=" opacity-50" fontSize="medium" />
    </nav>
  );
}

export default TopNav;
