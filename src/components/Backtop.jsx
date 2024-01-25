import React, { useEffect, useRef, useState } from "react";
import backtop from "../assets/images/backtotop.webp";
const Backtop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div>
      <div className="container mx-auto px-3 max-w-[1150px]">
        <div
          onClick={() =>
            setPosition({ ...position, position: { top: 0, left: 0 } })
          }
          className="fixed hidden bottom-[3%] right-[2%] z-[25] translate-y-[0%] animate-bounce"
          ref={scrollTop}
        >
          <div className="h-[52px] w-[52px] rounded-[50%] border  cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear]  flex justify-center items-center">
            <img
              src={backtop}
              alt="backtop"
              className=" bg-[white] hover:bg-[#B00000] duration-300 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backtop;
