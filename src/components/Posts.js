import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { Circular } from "styled-loaders-react";
import {
  SettingsIcon,
  AccountCircleRoundedIcon,
  CollectionsIcon,
  GifBoxIcon,
  ChecklistOutlinedIcon,
  SentimentSatisfiedAltIcon,
  PlaceIcon,
  CalendarTodayIcon,
} from "../utils/iconImports";

import Post from "./Post";

function Posts() {
  const { posts, loading } = useContext(ApiContext);

  let content = null;

  if (loading) {
    content = (
      <div>
        {" "}
        <Circular color="black" size="40px" />
      </div>
    );
  } else {
    content = (
      <div className="w-full min-h-screen border flex flex-col mx-4">
        <div className="flex justify-center items-stretch border-b border-gray-300  text-gray-400 text-base font-semibold">
          <div className=" hover:bg-gray-700 cursor-pointer flex flex-col justify-center items-center py-4 px-14 text-white font-bold ">
            For you
          </div>

          <div className="hover:bg-gray-700 cursor-pointer flex flex-col justify-center items-center py-4 px-14">
            Following
          </div>
          <div className="flex flex-col justify-center items-center py-4 px-3 ">
            <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
              <SettingsIcon />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center gap-4 p-4 border-b text-xl">
            <div className="flex items-center gap-1">
              <AccountCircleRoundedIcon fontSize="large" />
              <input
                className="text-gray-200 rounded-full px-4 py-1 bg-black w-96 focus:outline-none"
                placeholder="What is happening?!"
              />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex justify-between gap-2 text-blue-500 text-xs">
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col items-center">
                  <CollectionsIcon fontSize="small" />
                </button>
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
                  <GifBoxIcon fontSize="small" />
                </button>
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
                  <ChecklistOutlinedIcon fontSize="small" />
                </button>
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
                  <SentimentSatisfiedAltIcon fontSize="small" />
                </button>
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
                  <PlaceIcon fontSize="small" />
                </button>
                <button className="hover:bg-gray-700 cursor-pointer p-1 rounded-full flex flex-col  items-center">
                  <CalendarTodayIcon fontSize="small" />
                </button>
              </div>
              <button className="ml-10 bg-blue-500 font-bold px-4 py-1 rounded-full hover:bg-blue-600 hover:text-semibold text-base">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-blue-400 text-lg border-b p-4  cursor-pointer ">
          Show {posts.length} posts
        </div>
        {posts.map((post) => (
          <Post key={post.id} value={post} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Posts;
