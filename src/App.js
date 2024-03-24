import React from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import ApiContextProvider from "./context/ApiContext";

function App() {
  return (
    <ApiContextProvider>
      <div className="w-[75vw] mx-auto  ">
        {" "}
        <Navbar /> <Posts />
      </div>
    </ApiContextProvider>
  );
}

export default App;
