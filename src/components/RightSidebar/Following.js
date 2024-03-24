import React from "react";
import FollowCard from "./FollowCard";

const Following = () => {
  return (
    <div className="flex flex-col justify-center  gap-5 bg-gray-800 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mx-4 my-2"> Who to Follow </h1>
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <p className=" flex flex-col items-start pl-4 pt-4 text-blue-500 cursor-pointer px-2 pb-4 hover:bg-gray-700 rounded-xl  ">
        {" "}
        Show more
      </p>
    </div>
  );
};

export default Following;
