import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import SideContent from "./SideContent.jsx";
import { Menu, X } from "lucide-react";
import SideBar from "./SideBar.jsx";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSideBar(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sideBar && !e.target.closest('.sidebar') && !e.target.closest('.menu-button')) {
        setSideBar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sideBar]);

  return (
    <>
      <div className="hidden lg:flex justify-between items-center w-full max-h-[60px] p-9 border-b shadow-md">
        <SearchBar placeholder="Search" />
        <SideContent />
      </div>

      <div className="flex lg:hidden justify-between items-center w-full max-h-[60px] p-4 border-b shadow-md">
        <div className="flex flex-row gap-2 items-center">
          <button 
            className="menu-button p-1 hover:bg-gray-100 rounded-md"
            onClick={() => setSideBar(!sideBar)}
          >
            {sideBar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <SearchBar placeholder="Search" />
        </div>
        <SideContent />

        {sideBar && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" />
            <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-white z-50 shadow-lg">
              <SideBar />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;