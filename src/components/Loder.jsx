import React from "react";
import logo from "../assets/images/logo.webp";
const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-white z-[10] w-full flex justify-center items-center">
        <div className=" animate-bounce w-[50px] h-[50px]">
          <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
