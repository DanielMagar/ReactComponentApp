import React from "react";
import Carousel, { CarouselItem } from "../common/Carousel";

const Rcomp2 = () => {
  return (
    <>
      <div className=" w-full  p-4 rounded">
        <div className=" w-full border  p-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div>
            <Carousel>
              <CarouselItem>Item 1</CarouselItem>
              <CarouselItem>Item 2</CarouselItem>
              <CarouselItem>Item 3</CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp2;
