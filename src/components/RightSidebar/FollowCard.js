import { AccountCircleRoundedIcon } from "../../utils/iconImports";
import React from "react";

const FollowCard = () => {
  return (
    <div className="flex justify-between  items-center gap-8 hover:bg-gray-700 px-4 py-2  cursor-pointer">
      <div className="flex items-center gap-2">
        <AccountCircleRoundedIcon />
        <div>
          <p className="font-bold"> Username </p>
          <p className="text-gray-500 text-sm"> @username </p>
        </div>
      </div>
      <button className=" bg-slate-300 text-black px-4 py-1 rounded-full hover:bg-slate-500 hover:text-semibold">
        Follow
      </button>
    </div>
  );
};

export default FollowCard;
