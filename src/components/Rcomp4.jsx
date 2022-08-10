import React from "react";
import APIfetchedLoader from "../common/APIfetchedLoader";
import CircularProgressBarWithCss from "../common/CircularProgressBarWithCss";
import StarRatings from "../common/StarRatings";
import Sliders from "../common/Sliders";

const Rcomp4 = () => {
  return (
    <>
      <div className="grid grid-cols-4  grid-flow-row gap-4 p-4">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded">
            API Fetched
          </div>

          <APIfetchedLoader />
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded">
              Circular Progress bar with just css and html
            </div>
            <CircularProgressBarWithCss />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded">
              Range Sliders
            </div>
            <Sliders />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded mb-3">
              Ratings
            </div>
            <StarRatings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp4;
