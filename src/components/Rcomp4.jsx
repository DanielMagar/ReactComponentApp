import React from "react";
import APIfetchedLoader from "../common/APIfetchedLoader";
import CircularProgressBarWithCss from "../common/CircularProgressBarWithCss";
import Parallax from "../common/Parallax";
import Sliders from "../common/Sliders";

const Rcomp4 = () => {
  return (
    <>
      <div className="grid grid-cols-4  grid-flow-row gap-4 p-4">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          API Fetched
          <APIfetchedLoader />
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Circular Progress bar with just css and html
            <CircularProgressBarWithCss />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Range Sliders
            <Sliders />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Parallex
            <Parallax />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp4;
