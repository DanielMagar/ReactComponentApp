import React, { useState } from "react";

const AccordianContent = (props) => {
  const [isAcrd, setIsAcrd] = useState(false);
  return (
    <>
      <div>
        <div
          className={`p-2 w-full border rounded flex justify-between bg-teal-500 text-white`}
          onClick={(e) => setIsAcrd(!isAcrd)}
        >
          <div> {props.data.topic}</div>
          <div className="cursor-pointer">
            <i
              className={`${
                isAcrd ? "bx bx-minus" : "bx bx-plus"
              } ease-in-out duration-300`}
            ></i>
          </div>
        </div>
        {isAcrd && (
          <div className="p-5 border ease-in-out duration-300">
            {props.data.content}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordianContent;
