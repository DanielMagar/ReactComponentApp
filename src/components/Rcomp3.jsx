import React, { useState, useEffect } from "react";
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
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  return (
    <>
      <div className="grid grid-cols-4  grid-flow-row gap-4 p-4">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className=" flex items-center gap-5">
            <button
              className="px-3 py-2 rounded mb-2 text-white bg-teal-500"
              onClick={refresh}
            >
              Click Me
            </button>
            <div>Loading Component</div>
          </div>
          <Loader />
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div>Progress Bar</div>
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
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">Progress Bar Rounded</div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">Multi Checkbox</div>
        </div>
      </div>
    </>
  );
};

export default Rcomp3;
