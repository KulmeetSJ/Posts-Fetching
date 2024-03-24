import React from "react";
import Searchbar from "./RightSidebar/Searchbar";
import SubscribeCard from "./RightSidebar/SubscribeCard";
import Hashtags from "./RightSidebar/Hashtags";
import Following from "./RightSidebar/Following";

const RightSidebar = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-evenly gap-10 mt-2 ">
      <Searchbar />
      <SubscribeCard />
      <Hashtags />
      <Following />
      <div className="flex flex-col items-center justify-center gap-5 text-xs text-gray-500 ">
        <div className="flex gap-2">
          <p className=" cursor-pointer hover:text-blue-400">
            Terms of Service
          </p>
          <p className=" cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-400 cursor-pointer">Cookie Policy</p>
        </div>
        <div className="flex gap-1">
          <p className="hover:text-blue-400 cursor-pointer">Accessibility</p>
          <p className="hover:text-blue-400 cursor-pointer">Ads info</p>
          <p className="hover:text-blue-400 cursor-pointer">More ...</p>
          <p className="hover:text-blue-400 cursor-pointer">© 2024 X Corp.</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
