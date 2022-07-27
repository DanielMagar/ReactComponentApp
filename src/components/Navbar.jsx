import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-teal-500 p-3">
        <div className="text-white ml-24">
          <a href="#" className="flex text-center items-center gap-4">
            <i className="bx bxs-component text-[50px]"></i>
            <span className="font-semibold text-xl tracking-tight">
              Custom Components
            </span>
          </a>
        </div>

        <div className="flex items-center justify-between gap-10 mr-28 text-white lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
          <div className="lg:flex-grow">
            <a href="#">Link</a>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
