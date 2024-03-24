import React from "react";
import {
  AccountCircleRoundedIcon,
  MoreHorizRoundedIcon,
  ChatBubbleOutlineIcon,
  ForwardToInboxIcon,
  FavoriteBorderIcon,
  BarChartIcon,
  BookmarkIcon,
  UploadIcon,
} from "../utils/iconImports";

function Post({ value }) {
  return (
    <div className="border-b border-gray-300 p-4 flex flex-col justify-between gap-10 hover:cursor-pointer ">
      <div className="flex justify-between items-stretch  text-sm group ">
        <div className="flex gap-2">
          <AccountCircleRoundedIcon fontSize="large" />
          <p className="group-hover:underline"> Username </p>
          <p className="text-gray-500 "> @username </p>
          <p className="text-gray-500 "> 3 hrs</p>
        </div>
        <button className=" hover:text-blue-400 hover:bg-blue-200 rounded-full p-1">
          <MoreHorizRoundedIcon />
        </button>
      </div>
      <div className="flex flex-col justify-between gap-4">
        <h1 className="text-xl font-bold">
          {value.id} : {value.title}
        </h1>
        <p className="font-medium text-lg">{value.body}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-4">
          <button className="hover:text-blue-400">
            <ChatBubbleOutlineIcon /> 100
          </button>
          <button className="hover:text-blue-400">
            <ForwardToInboxIcon /> 100
          </button>
          <button className="hover:text-blue-400">
            <FavoriteBorderIcon /> 100
          </button>
          <button className="hover:text-blue-400">
            <BarChartIcon /> 100
          </button>
        </div>
        <div className="flex gap-4">
          <button className="hover:text-blue-400">
            <BookmarkIcon /> 100
          </button>
          <button className="hover:text-blue-400">
            <UploadIcon /> 100
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
