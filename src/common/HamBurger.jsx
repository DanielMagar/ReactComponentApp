import React, { useState, useEffect } from "react";

const HamBurger = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <div className="p-2 ">
      <div className="relative transition-all ease-in-out cursor-pointer">
        <div className="relative" onClick={() => setIsActive(!isActive)}>
          <div
            className={
              !isActive
                ? "w-[3rem] h-[0.1rem] bg-white my-2"
                : "w-[3rem] h-[0.1rem] bg-pink-500 my-2 t transition-all ease-in-out rotate-[-45deg]"
            }
          ></div>
          <div
            className={
              !isActive
                ? "w-[3rem] h-[0.1rem] bg-white my-2"
                : "w-[3rem] h-[0.1rem] bg-pink-500 my-2 transition-all ease-in-out rotate-[45deg] t translate-[5px -30px]"
            }
          ></div>
          <div
            className={
              !isActive
                ? "w-[3rem] h-[0.1rem] bg-white my-2"
                : "w-[3rem] h-[0.1rem] bg-pink-500 my-2 bg-transparent  ease-in-ou  transition-all ease-in-out"
            }
          ></div>
        </div>
        <div
          className={
            !isActive
              ? "text-white absolute hidden translate-x-[0%]"
              : "visible absolute text-white translate-x-[-50%] transition backdrop-filter backdrop-blur-lg  ease-out duration-700  z-50 h-full w-[200px] ml-[-22px] lg:w-[500px] lg:ml-[-173px]"
          }
        >
          <ul className="w-[100%] bg-black backdrop-filter backdrop-blur-lg   text-white p-5 h-[89vh]">
            <li className="p-5">
              <a href="">Home</a>
            </li>
            <li className="p-5">Services</li>
            <li className="p-5">Capabilities</li>
            <li className="p-5">Team</li>
            <li className="p-5">About</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamBurger;
