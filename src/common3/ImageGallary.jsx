import React from "react";

const ImageGallary = () => {
  return (
    <>
      <div className="border grid grid-cols-4 grid-flow-row gap-5 p-5 rounded">
        <div className="img-hover-zoom">
          <img
            src="https://images.pexels.com/photos/4035914/pexels-photo-4035914.jpeg?cs=srgb&dl=pexels-batuhan-g%C3%BCl%C5%9Fen-4035914.jpg&fm=jpg"
            alt="image"
          />
        </div>

        <div class="img-hover-zoom img-hover-zoom--quick-zoom">
          <img
            src="https://images.pexels.com/photos/8691140/pexels-photo-8691140.jpeg?cs=srgb&dl=pexels-wahyu-widiatmoko-8691140.jpg&fm=jpg"
            alt="Another Image zoom-on-hover effect"
          />
        </div>
        <div class="img-hover-zoom img-hover-zoom--point-zoom ">
          <img
            src="https://images.pexels.com/photos/10691795/pexels-photo-10691795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Another Image zoom-on-hover effect"
          />
        </div>

        <div class="img-hover-zoom img-hover-zoom--zoom-n-rotate ">
          <img
            src=" https://images.pexels.com/photos/10958864/pexels-photo-10958864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Another Image zoom-on-hover effect"
          />
        </div>
      </div>
      <div className="p-2"></div>
      <div className="border grid grid-cols-4 grid-flow-row gap-5 p-5 rounded">
        <div className="img-hover-zoom img-hover-zoom--slowmo">
          <img
            src="https://images.pexels.com/photos/12826597/pexels-photo-12826597.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
        </div>

        <div class="img-hover-zoom img-hover-zoom--brightness">
          <img
            src="https://images.pexels.com/photos/11952638/pexels-photo-11952638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Another Image zoom-on-hover effect"
          />
        </div>
        <div class="img-hover-zoom img-hover-zoom--colorize">
          <img
            src="https://images.pexels.com/photos/12032608/pexels-photo-12032608.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Another Image zoom-on-hover effect"
          />
        </div>

        <div class="img-hover-zoom img-hover-zoom--zoom-n-pan-v  ">
          <img
            src=" https://images.pexels.com/photos/8218388/pexels-photo-8218388.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Another Image zoom-on-hover effect"
          />
        </div>
      </div>
    </>
  );
};

export default ImageGallary;
