import React, { useEffect } from "react";
import Accordian from "../common/Accordian";
import { Dropdown } from "../common/Dropdown";
import DropdownWithSearch from "../common/DropdownWithSearch";
import MultiCheckbox from "../common/MultiCheckbox";
import "boxicons";

import AOS from "aos";
import "aos/dist/aos.css";

const Rcomp1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2  grid-flow-row gap-4 p-4 sm:grid-cols-1  lg:grid-cols-4 ">
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full "
          data-aos="slide-right"
        >
          <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded mb-3">
            Dropdown without search
          </div>
          <Dropdown />
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded mb-3">
              Dropdown with search
            </div>

            <DropdownWithSearch />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded mb-3">
              Accordian
            </div>
            <Accordian />
          </div>
        </div>
        <div
          className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full "
          data-aos="slide-left"
        >
          <div className="w-full">
            <div className="bg-teal-500 w-full p-2 text-white text-[18px] rounded mb-3">
              Multi Checkbox
            </div>
            <MultiCheckbox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp1;
