import React from "react";
import Accordian from "../common/Accordian";
import { Dropdown } from "../common/Dropdown";
import DropdownWithSearch from "../common/DropdownWithSearch";
import MultiCheckbox from "../common/MultiCheckbox";
import "boxicons";

const Rcomp1 = () => {
  return (
    <>
      <div className="grid grid-cols-4  grid-flow-row gap-4 p-4">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          Dropdown without search
          <Dropdown />
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Dropdown with search
            <DropdownWithSearch />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Accordian
            <Accordian />
          </div>
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">
            Multi Checkbox
            <MultiCheckbox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rcomp1;
