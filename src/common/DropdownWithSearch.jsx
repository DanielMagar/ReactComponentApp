import React, { useState, useEffect } from "react";
import StateAtom from "../recoil/StateAtom";
import selectedAtom2 from "../recoil/selectedAtom2";

import { useRecoilState } from "recoil";

const DropdownWithSearch = () => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useRecoilState(StateAtom);
  const [selected2, setSelected2] = useRecoilState(selectedAtom2);
  const [search, setSearch] = useState("");
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
        <div>{selected2}</div>
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
        <div className="h-60 border border-collapse p-2  ">
          <div>
            <div className="searchbox">
              <input
                type="text"
                name="search"
                className="border p-2 w-full sticky rounded"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="h-40 overflow-y-auto">
            {myarr
              .filter((searchData) => {
                if (search == "") {
                  return searchData;
                } else if (
                  searchData.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  searchData.key.toLowerCase().includes(search.toLowerCase())
                ) {
                  return searchData;
                }
              })
              .map((data, idx) => (
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  key={idx}
                  onClick={(e) => {
                    setSelected2(data.name);
                    setIsActive(!isActive);
                  }}
                >
                  {data.name} ( {data.key} )
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownWithSearch;
