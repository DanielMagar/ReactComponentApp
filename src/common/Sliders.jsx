import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useEffect } from "react";

const Sliders = () => {
  const [value, onChange] = useState(0);

  const [hoverStatus, setHoverStatus] = useState(false);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 0.25)}px`;
    }
  });
  return (
    <>
      <div className="py-10">Single Slider</div>
      <div className=" w-full flex flex-col gap-6 items-center justify-center">
        <div className="w-full">
          <div className="buble">
            <span
              className="tooltiptext"
              //   className={`tooltiptext ${hoverStatus ? "block" : "hidden"} `}
            >
              {value}
            </span>
          </div>
          <input
            onMouseEnter={() => {
              setHoverStatus(true);
            }}
            onMouseLeave={() => {
              setHoverStatus(false);
            }}
            type="range"
            min="0"
            max="100"
            className="range cursor-pointer w-full "
            value={value}
            onChange={({ target: { value: radius } }) => {
              onChange(radius);
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="py-14">Multi Range Slider</div>
        <div className="flex items-center justify-center">
          <div className="multi-range-slider">
            <input
              className="multi-range-inp"
              type="range"
              id="input-left"
              min="0"
              max="100"
            />
            <input
              className="multi-range-inp"
              id="input-right"
              type="range"
              min="0"
              max="100"
            />
            <div className="slider">
              <div className="track"></div>
              <div className="range"></div>
              <div className="thumb left"></div>
              <div className="thumb right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliders;
