import React from "react";

const CircularLoader = () => {
  return (
    <>
      <div className="bg-teal-500 p-2 text-white rounded mb-3 w-full">
        Circular Loader
      </div>
      <div className="flex">
        <div className="w-[100vw] flex items-center justify-center z-50 translate-y-[80%] sm:translate-y-[50%]">
          <svg
            class="svgLoader"
            viewBox="0 0 100 100"
            width="10em"
            height="10
            em"
          >
            <path
              stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              fill="#51CACC"
              transform="rotate(179.719 50 51)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CircularLoader;
