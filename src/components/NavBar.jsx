import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
const NavBar = () => {
  const [navshow, setnavshow] = useState(false);
  console.log(navshow);
  function show() {
    setnavshow(!navshow);
  }
  if (navshow === true) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <div>
      <nav className="md:py-[41px] py-[21px]">
        <div className="max-w-[1190px] mx-auto px-3">
          <div className=" flex justify-between items-center">
            <ul className=" flex items-center lg:gap-[135px] gap-[35px]">
              <li className="flex items-center lg:gap-[65px] gap-[22px]">
                <a href="#">
                  <img src={logo} alt="logo" className="w-[90px] h-[60px]" />
                </a>
                <a
                  href="#service"
                  className=" hidden sm:block text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Our Services
                </a>
              </li>
              <li
                className={` ${
                  navshow ? "max-md:left-0" : "max-md:left-[-100%]"
                } flex items-center lg:gap-[33px] gap-[22px] duration-300 max-md:justify-center max-md:absolute max-md:top-0  max-md:w-full z-[3] max-md:h-full max-md:bg-white max-md:flex-col`}
              >
                <a
                  onClick={show}
                  href="#service"
                  className=" block sm:hidden text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Our Services
                </a>
                <a
                  onClick={show}
                  href="#about"
                  className=" text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  About
                </a>
                <a
                  onClick={show}
                  href="#bolg"
                  className=" text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Blog&News
                </a>
                <a
                  onClick={show}
                  href="#contact"
                  className=" text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Contact
                </a>
                <a
                  onClick={show}
                  href="#account"
                  className=" block sm:hidden text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Account
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-5 lg:mr-[52px]">
              <li className="flex  items-center lg:gap-[31px] gap-[22px] ">
                <a
                  href="#account"
                  className=" hidden sm:block text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  Account
                </a>
                <p className="text-[#DAD8D8] leading-[19px] hidden sm:block">
                  |
                </p>
                <a
                  href="tel:+2349067322844"
                  className=" flex items-center gap-[6px] text-black font-Poppins text-[15px] font-semibold leading-normal navhover"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1171_470)">
                      <path
                        d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                        stroke="#B00000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1171_470">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  +2349067322844
                </a>
              </li>
              <button
                onClick={show}
                className={`${
                  navshow ? " rotate-0 font-bold" : " rotate-90 font-medium"
                } sm:text-[31px] text-[25px] max-md:block hidden  text-black hover:text-[#B00000] duration-300  relative z-[4]`}
              >
                {navshow ? "x" : "|||"}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;