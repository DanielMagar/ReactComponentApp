import React, { useState, useEffect } from "react";
import CircularLoader from "../common/CircularLoader";
import CircularProgressBar from "../common/CircularProgressBar";
import Loader from "../common/Loader";
import ProgressBar from "../common/ProgressBar";
import ProgressBarSigle from "../common/ProgressBarSigle";

const progressData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];
const progressDataSingle = [{ bgcolor: "#6a1b9a" }];

const Rcomp3 = () => {
  const refresh = () => {
    window.location.reload(false);
  };

  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 5000);
  }, []);
  return (
    <>
      <div className="grid grid-cols-4  grid-flow-row gap-4 p-4 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 ">
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full "
          data-aos="flip-left"
        >
          <div className=" flex items-center text-center gap-1">
            <button
              className="p-2 rounded mb-2 text-white bg-teal-500 w-[30%]"
              onClick={refresh}
            >
              Click Me
            </button>
            <div className="bg-teal-500 p-2 text-white rounded mb-2 w-[70%]">
              Loading Component
            </div>
          </div>
          <Loader />
        </div>
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full sm:h-[500px]"
          data-aos="flip-up"
        >
          <div className="bg-teal-500 p-2 text-white rounded mb-3 w-full">
            Progress Bar
          </div>
          <div className="flex flex-col  w-full translate-y-[50%] ">
            <div className="w-full">
              {progressData.map((data, idx) => (
                <div key={idx}>
                  <ProgressBar
                    bgcolor={data.bgcolor}
                    completed={data.completed}
                  />
                </div>
              ))}
            </div>
            <div className="w-full ">
              <ProgressBarSigle bgcolor="#6a1b9a" completed={completed} />
            </div>
          </div>
        </div>
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full sm:h-[500px]"
          data-aos="flip-down"
        >
          <div className="w-full ">
            <CircularProgressBar bgcolor="#6a1b9a" completed={completed} />
          </div>
        </div>
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full sm:h-[500px]"
          data-aos="flip-right"
        >
          <div className="w-full ">
            <CircularLoader />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp3;
