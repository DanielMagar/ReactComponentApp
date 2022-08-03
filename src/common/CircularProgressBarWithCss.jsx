import React, { useState, useEffect } from "react";

const CircularProgressBarWithCss = () => {
  const [progressStart, setProgressStart] = useState(0);

  useEffect(() => {
    let start = 0,
      end = 100;
    let progress = setInterval(() => {
      start++;
      if (start == end) {
        clearInterval(progress);
      }
      // console.log(start);
      setProgressStart(start);
    }, 100);
  }, []);

  return (
    <>
      {progressStart ? (
        <div className="flex items-center justify-center h-[400px]">
          <div className="w-[350px] p-[50px] rounded-[8px] bg-[#fff] flex flex-col items-center gap-6">
            <div
              className="circularprogress flex items-center justify-center relative h-[200px] w-[200px] rounded-[50%] bg-[#f0ff]"
              style={{
                background: `conic-gradient(#7d2ae8 ${
                  progressStart * 3.6
                }deg, #ededed 0deg)`,
                transitionTimingFunction: "linear",
              }}
            >
              <span className="progressvalue text-[40px] font-bold text-[#7d2ae8]">
                {progressStart}%
              </span>
            </div>
            {/* <span className="text text-[30px] font-[500] text-[#606060]">
              HTML & CSS
            </span> */}
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default CircularProgressBarWithCss;
