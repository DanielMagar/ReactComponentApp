import React, { useState, useEffect } from "react";
// import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import HalfStarRating from "./HalfStarRating";
import PrecisionStarRatings from "./PrecisionStarRatings";

const StarRatings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(rating);
  ////////////////////////////////////////////////////////////

  return (
    <>
      <div className="border rounded-[6px] p-4 mb-4">
        <div className="flex items-center justify-center">Default </div>
        <div className="star-rating">
          {[...Array(5)].map((star, idx) => {
            idx += 1;
            return (
              <button
                type="button"
                id="ratingstar"
                key={idx}
                // className={idx <= (rating || hover) ? "on" : "off"}
                className={`${
                  idx <= ((rating && hover) || hover) ? "on" : "off"
                }`}
                onClick={() => setRating(idx)}
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
              >
                <span className="star">
                  <i className="bx bxs-star"></i>
                </span>
                {/* <span className="star">&#9733;</span> */}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-center">Rating: {rating}</div>
      </div>
      <div className="border  rounded-[6px] p-4 mb-4">
        <div className="flex items-center justify-center p-3">
          Precision Ratings-class based
        </div>
        <HalfStarRating rating={0} />
      </div>
      <div className="border  rounded-[6px] p-4">
        <div className="flex items-center justify-center p-3">
          Precision Ratings-function/hooks based
        </div>
        <PrecisionStarRatings />
      </div>
    </>
  );
};

export default StarRatings;
