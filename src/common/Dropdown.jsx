import React, { useState, useEffect } from "react";
import StateAtom from "../recoil/StateAtom";
import selectedAtom from "../recoil/selectedAtom";

import { useRecoilState } from "recoil";

export const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useRecoilState(StateAtom);
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const [myarr, setMyarr] = useState([]);
  useEffect(() => {
    setMyarr(state);
  }, [state]);

  return (
    <>
      <div
        className="w-full border rounded-[4px] p-2 flex justify-between items-center cursor-pointer "
        onClick={(e) => setIsActive(!isActive)}
      >
        <div>{selected}</div>
        <div>
          <i
            className={`bx bx-chevron-down text-[24px] ${
              isActive
                ? "rotate-180 transition duration-10 ease-out"
                : "transition duration-10 ease-out"
            }`}
          ></i>
        </div>
      </div>
      {isActive && (
        <div className="h-60 border border-collapse p-5 overflow-y-auto transition duration-[1s] ease-out">
          {myarr.map((data, idx) => (
            <div
              className="p-2 hover:bg-gray-100 cursor-pointer"
              key={idx}
              onClick={(e) => {
                setSelected(data.name);
                setIsActive(!isActive);
              }}
            >
              {data.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
