import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useEffect } from "react";
import MultirangeSlider from "./MultirangeSlider";

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
              // className={`tooltiptext ${hoverStatus ? "block" : "hidden"} `}
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
      <div>
        <div className="py-14">Multi Range Slider</div>
        <MultirangeSlider
          min={0}
          max={100}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
    </>
  );
};

export default Sliders;
