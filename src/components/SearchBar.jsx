import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <>
      <div className=" flex lg:hidden lg:w-1/3 h-12 items-center justify-center border-1 p-5 rounded-lg border-gray-900/40  focus-within:border-gray-900/60">
        <Search className="cursor-pointer w-6 h-6" />
      </div>
      <div className=" hidden lg:flex lg:w-1/3 h-12 items-center justify-center border-1 p-5 rounded-lg border-gray-900/40 bg-gray-400/20 focus-within:border-gray-900/60">
        <input
          placeholder={placeholder}
          className="w-full lg:p-3 border-none focus:none outline-none bg-transparent"
        />
        <Search className="cursor-pointer w-6 h-6" />
      </div>
    </>
  );
};

export default SearchBar;
