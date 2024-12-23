import NavBar from "../components/NavBar.jsx";
import SideBar from "../components/SideBar.jsx";
import WaveProgress from "../components/WaveProgress.jsx";
import React from "react";
import Main from "./Main.jsx";

const Home = (props) => {


  return (
    <>
      <div className="flex flex-row h-full mb-[4rem]">
        <div className="hidden lg:flex lg:max-w-[242px] lg:min-w-[242px] h-full min-h-screen">
          <SideBar />
        </div>
        <div className="flex flex-col w-full">
          <NavBar />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
