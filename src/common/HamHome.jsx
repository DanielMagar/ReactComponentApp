import React from "react";
import HamBurger from "./HamBurger";

const HamHome = () => {
  return (
    <div className="bg-white-500 h-[100vh]">
      <div className="flex justify-between items-center p-5 border bg-black border-black ">
        <div className="text-white">Logo</div>
        <HamBurger />
      </div>
    </div>
  );
};

export default HamHome;
