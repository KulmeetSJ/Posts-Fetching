import React from "react";
import ApiContextProvider from "./context/ApiContext";
import Main from "./components/Main";

function App() {
  return (
    <ApiContextProvider>
      <div className="w-[85vw] mx-auto ">
        {" "}
        <Main />
      </div>
    </ApiContextProvider>
  );
}

export default App;
