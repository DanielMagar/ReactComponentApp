import React from "react";

const ProgressBar = (props) => {
  //   const [bgcolor, completed] = props;
  return (
    <>
      <div className="h-[20px] w-full bg-slate-300 border rounded-[50px] mt-6">
        <div
          style={{
            height: "100%",
            width: `${props.completed}%`,
            backgroundColor: `${props.bgcolor}`,
            borderRadius: "inherit",
            textAlign: "right",
          }}
        >
          <span className="py-5 text-white text-[16px]">
            {props.completed}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
