import React from "react";
import { Search } from "../../utils/iconImports";

const Searchbar = () => {
  return (
    <div className="flex justify-center items-center gap-1 bg-gray-500 rounded-full p-2">
      <Search className="text-gray-400" />
      <input
        type="text"
        placeholder="Search "
        className="bg-gray-500 outline-none "
      />
    </div>
  );
};

export default Searchbar;
