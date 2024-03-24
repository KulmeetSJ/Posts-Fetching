import React from "react";
import { MoreHorizRoundedIcon } from "../../utils/iconImports";

const HashtagCard = () => {
  return (
    <div className="flex flex-col justify-between hover:bg-gray-700 px-4 py-2 cursor-pointer ">
      <div className="flex justify-between text-gray-500 text-sm ">
        <p> Trending </p>
        <button className=" hover:text-blue-400 hover:bg-blue-200 rounded-full">
          <MoreHorizRoundedIcon />
        </button>
      </div>
      <p className="font-extrabold"> #Hashtag </p>
      <p className="text-gray-500 text-sm"> 20k posts</p>
    </div>
  );
};

export default HashtagCard;
