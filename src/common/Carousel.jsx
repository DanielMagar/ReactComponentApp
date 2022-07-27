import React, { useState } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <>
      <div
        className="inline-flex items-center justify-center h-[400px] bg-teal-400 text-white"
        style={{ width: width }}
      >
        {children}
      </div>
    </>
  );
};
const Carousel = ({ children }) => {
  console.log("Children", children);
  const [activeIndex, setActiveIndex] = useState(0);

  // updating index for updating activeIndex state value to activate translate into 0, 100 and 200 respectively
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="overflow-hidden">
        <div
          className={`whitespace-nowrap transition-all duration-[0.3s] -translate-x-[${
            activeIndex * 100
          }%]`}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="bg-teal-500 p-2 rounded-[50%] text-white"
            onClick={() => updateIndex(activeIndex - 1)}
          >
            <i className="bx bxs-chevron-left"></i>
          </button>
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={`p-2 rounded-[80%] text-white active:bg-purple-500 ${
                  index === activeIndex ? "bg-purple-500" : "bg-teal-500"
                }`}
                onClick={() => updateIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            className="bg-teal-500 p-2 rounded-[50%] text-white"
            onClick={() => updateIndex(activeIndex + 1)}
          >
            <i className="bx bxs-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
