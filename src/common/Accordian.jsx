import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import AccordianAtom from "../recoil/AccordianAtom";
import AccordianContent from "./AccordianContent";

const Accordian = () => {
  const [isAcrd, setIsAcrd] = useState(false);

  const [accord, setAccord] = useRecoilState(AccordianAtom);
  const [myaccord, setMyaccord] = useState([]);
  useEffect(() => {
    setMyaccord(accord);
  }, [accord]);
  console.log(accord);
  return (
    <>
      <div className="w-full rounded p-2">
        {myaccord.map((data) => (
          <AccordianContent data={data} />
        ))}
      </div>
    </>
  );
};

export default Accordian;
