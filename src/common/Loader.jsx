import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="border rounded p-3 h-[400px]">
        {loading ? (
          <div className="loader-container flex w-full h-full  z-50 items-center justify-center">
            {/* <div className="w-[64px] h-[64px] border-[8px] border-regal-blue text-center rounded-[50%] animate-spin"></div> */}
            <div>
              <div className="text-white p-2">Loading.....</div>
              <div className="spinner text-6xl"></div>
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full bg-cover bg-center bg-[rgba(0, 0, 0, 0.834)]  bg-[url('https://images.pexels.com/photos/5720809/pexels-photo-5720809.jpeg?cs=srgb&dl=pexels-daniela-constantini-5720809.jpg&fm=jpg')]"></div>
        )}
      </div>
    </>
  );
};

export default Loader;
