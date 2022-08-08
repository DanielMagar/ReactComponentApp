import React from "react";

const Parallex = () => {
  return (
    <>
      <div className=" w-full border  p-3  h-[500px] rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-scroll">
        <div className="parallax1 text-white text-[24px]">
          <div className="caption">
            <span className="border">
              Scroll Down <i className="bx bxs-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className="par-text">
          <h3 className="text-center tracking-[5px] text-[30px] uppercase text-[#111]">
            Parallax Demo
          </h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          necessitatibus unde provident hic iure quia dolores architecto impedit
          blanditiis molestiae sunt fugiat repudiandae perspiciatis enim harum
          autem modi quibusdam accusamus.
        </div>
        <div className="parallax2 text-white text-[24px]">
          <div className="caption">
            <span className="border" style={{ backgroundColor: "transparent" }}>
              Less Height
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="text-[#ddd] bg-[#282E34] text-center py-[50px] px-[80px]">
            <p>
              Scroll up Scroll Down <i className="bx bxs-chevron-up"></i> and
              down to really get the feeling of how Parallax Scrolling works.
            </p>
          </div>
        </div>
        <div className="parallax3 text-white text-[24px]">
          <div className="caption">
            <span className="border" style={{ backgroundColor: "transparent" }}>
              Awesome
            </span>
          </div>
        </div>
        <div className="parallax1 text-white text-[24px]">
          <div class="caption">
            <span class="border">COOL!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallex;
