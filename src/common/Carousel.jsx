import React from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <>
      <div style={{ width: width }}>{children}</div>
    </>
  );
};
const Carousel = ({ children }) => {
  console.log("Children", children);
  return (
    <>
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration: 0.3s -translate-x-[0%]">
          {React.Children.map(
            (children,
            (child, idx) => {
              return React.cloneElement(child, { width: "100%" });
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;
