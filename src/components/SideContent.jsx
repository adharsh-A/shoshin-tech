import { BellDot, BellDotIcon, ChevronDown, MessageSquareMore } from "lucide-react";
import React from "react";

const SideContent = (props) => {
  return (
    <div className="flex items-center space-x-4">
      <BellDotIcon className="w-6 h-6 cursor-pointer" />
      <MessageSquareMore className="cursor-pointer w-6 h-6" />
      <div className="w-6 h-6 flex cursor-pointer">
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/66/98/profile-placeholder-image-gray-silhouette-vector-30216698.jpg"
          alt="Small Image"
          className="w-full h-full object-cover rounded-full cursor-pointer"
        />
          </div>{" "}
          <div className="lg:flex items-center gap-1 hidden">
          Admirra John <ChevronDown className="w-6 h-6 cursor-pointer"/>
          </div>
          <div className="lg:hidden items-center gap-1 flex">
      <ChevronDown className="w-4 h-4 cursor-pointer"/>
          </div>
    </div>
  );
};

export default SideContent;
