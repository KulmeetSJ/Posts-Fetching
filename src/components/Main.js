import React from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const Main = () => {
  return (
    <div className="flex  justify-start gap-36">
      <Sidebar />
      <Posts />
      <RightSidebar />
    </div>
  );
};

export default Main;
