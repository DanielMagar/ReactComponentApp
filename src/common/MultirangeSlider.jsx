import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const MultirangeSlider = ({ min, max, onChange }) => {
  // Creating the state variables
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);

  // Creating the refs
  const minValRef = useRef(null);
  const maxValRef = useRef(null);

  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;

        let check = range.current.style.left;
        console.log("Range is-----------", check);
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  MultirangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  // useEffect(() => {
  //   const ele = document.querySelector(".slider__left-value");
  //   if (ele) {
  //     ele.style.left = `${Number(minVal / 0.45)}px`;
  //   }
  // });

  return (
    <>
      <div>
        <div className="flex items-center justify-center w-full h-[auto] m-0 p-0">
          <div className="">
            <div className="w-full">
              <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                  const value = Math.min(+event.target.value, maxVal - 1);
                  setMinVal(value);
                  event.target.value = value.toString();
                  console.log("####", event.target.value);
                }}
                className={classnames("thumb thumb--zindex-3 mythumb", {
                  "thumb--zindex-5": minVal > max - 100,
                })}
              />
              <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                  const value = Math.max(+event.target.value, minVal + 1);
                  setMaxVal(value);
                  event.target.value = value.toString();
                  console.log("lllalalla", event.target.value);
                }}
                className="thumb thumb--zindex-4"
              />

              <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />

                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultirangeSlider;
