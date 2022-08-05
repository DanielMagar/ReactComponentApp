import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const PrecisionStarRatings = () => {
  const [mystars, setMyStars] = useState([]);
  const [count, setCount] = useState(0);
  const [zoom, setZoom] = useState(false);

  const initialState = {
    rating: 0 || null,
    tempRating: null,
  };
  const [object, setObject] = useState(initialState);

  useEffect(() => {
    console.log(object);
  }, [object]);

  const handleMouseover = (rtng) => {
    setObject((prev) => ({
      rating: rtng,
      tempRating: prev.rating,
    }));
    setZoom(true);
  };

  const rate = (rtng) => {
    setObject(() => ({
      rating: rtng,
      tempRating: rtng,
    }));
    setCount(rtng / 2 + 0.5);
  };

  const handleMouseout = () => {
    object.rating = object.tempRating;
    setObject({ rating: object.rating });
    // this.setState((prev) => ({
    //   rating: prev.temp_rating,
    // }));
    setZoom(false);
  };
  useEffect(() => {
    let stars = [];
    for (let i = 0; i < 10; i++) {
      let klass = "bx bx-star text-[#00b8a7]";
      if (object.rating >= i && object.rating !== null) {
        klass = "bx bxs-star text-[#00b8a7]";
      }

      stars.push(
        <i
          className={klass}
          //   className={zoom ? `${klass} zoom-star` : `${klass}`}
          style={{
            display: "inline-block",

            width: "14px",
            fontSize: "28px",
            overflow: "hidden",
            // direction: i % 2 === 0 ? "rtl" : "ltr",
            direction: i % 2 === 0 ? "ltr" : "rtl",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleMouseover(i)}
          onClick={() => rate(i)}
          onMouseLeave={() => handleMouseout()}
        />
      );
    }
    setMyStars(stars);
  }, [object]);
  return (
    <>
      <div className="flex items-center justify-center">{mystars}</div>
      <div className="flex items-center justify-center">Rating: {count}</div>
    </>
  );
};

export default PrecisionStarRatings;
