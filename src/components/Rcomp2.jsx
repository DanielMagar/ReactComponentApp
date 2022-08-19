import React from "react";
import Carousel, { CarouselItem } from "../common/Carousel";
import "boxicons";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";

const Rcomp2 = () => {
  return (
    <>
      <div className=" w-full  p-4 rounded">
        <div className="text-[18px]">Carousel</div>
        <div className=" w-full border  p-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div>
            <Carousel>
              <CarouselItem>
                <div className="h-full bg-[url('images/1.jpg')]  w-full bg-cover bg-center "></div>
                {/* <img
                  src={firstImage}
                  alt="firstImage"
                  className="h-full w-full"
                /> */}
              </CarouselItem>
              <CarouselItem>
                <div className="h-full bg-[url('images/2.jpg')]  w-full bg-cover bg-center"></div>
                {/* <img src={secondImage} alt="secondImage" className="h-full " /> */}
              </CarouselItem>
              <CarouselItem>
                <div className="h-full bg-[url('images/3.jpg')]  w-full bg-cover bg-center"></div>
                {/* <img
                  src={thirdImage}
                  alt="secthirdImageondImage"
                  className="h-full "
                /> */}
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp2;
