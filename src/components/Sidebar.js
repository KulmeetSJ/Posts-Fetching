import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  HomeIcon,
  Search,
  MailIcon,
  ListAltIcon,
  ArrowOutwardIcon,
  CloseIcon,
  PersonOutlineOutlinedIcon,
  MoreRoundedIcon,
  FaceRoundedIcon,
  MoreHorizRoundedIcon,
} from "../utils/iconImports";

const Sidebar = () => {
  return (
    <div className="h-screen text-white flex flex-col justify-evenly gap-10 mt-2 ">
      <h1 className="text-4xl font-bold ">Posts Api</h1>
      <div className=" flex flex-col justify-start gap-5  text-2xl">
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400 ">
          {" "}
          <HomeIcon /> Home
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <Search /> Explore
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <NotificationsIcon /> Notifications
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <MailIcon /> Messages
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <ArrowOutwardIcon /> Grok{" "}
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <ListAltIcon /> Lists
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <CloseIcon /> Premium
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <PersonOutlineOutlinedIcon /> Profile
        </div>
        <div className="flex justify-start items-center cursor-pointer gap-4 hover:text-blue-400">
          <MoreRoundedIcon /> More
        </div>
        <button className="bg-blue-500  px-4 py-2 text-xl font-semibold text-center gap-4 rounded-full mt-4 hover:bg-blue-600 hover:font-bold">
          Post
        </button>

        <div className="flex justify-start items-center cursor-pointer gap-4 ">
          <FaceRoundedIcon />
          <div className="flex flex-col text-base hover:text-blue-400 ">
            <p className="font-bold text-sm ">Username</p>
            <p className="text-gray-400">@username</p>
          </div>
          <MoreHorizRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
