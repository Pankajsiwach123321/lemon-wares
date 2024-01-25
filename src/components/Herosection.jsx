import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import blackgril from "../assets/images/heroimg.webp";
import { Redbetween, Redbottom, Redtop } from "../assets/svg/icon";
const Herosection = () => {
  const [Tabs, settabs] = useState("tab1");
  function changetab(tab) {
    settabs(tab);
  }
  return (
    <div>
      <div className=" max-w-[1190px] mx-auto px-3">
        <div className="row">
          <div className="lg:w-1/2 w-full px-3">
            <div className="flex items-center after:absolute max-w-[242px] after:w-full after:h-[1px] relative after:left-0 after:bottom-[-5px] after:bg-[#E5E5E5]">
              <a
                onClick={() => changetab("tab1")}
                href="#"
                className={` ${
                  Tabs === "tab1"
                    ? "after:w-[80%] text-[#B00000]"
                    : "after:w-0 text-[#DBD9D9]"
                } duration-300 after:duration-300  font-Poppins font-semibold  text-[15px] leading-normal  after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
              >
                Hosting
              </a>
              <a
                onClick={() => changetab("tab2")}
                href="#"
                className={` ${
                  Tabs === "tab2"
                    ? "after:w-[80%] text-[#B00000]"
                    : "after:w-0 text-[#DBD9D9]"
                } duration-300 after:duration-300  font-Poppins font-semibold ml-[23px]  text-[15px] leading-normal text-[#DBD9D9] after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
              >
                Domain
              </a>
              <a
                onClick={() => changetab("tab3")}
                href="#"
                className={` ${
                  Tabs === "tab3"
                    ? "after:w-[80%] text-[#B00000]"
                    : "after:w-0 text-[#DBD9D9]"
                } duration-300 after:duration-300  font-Poppins font-semibold ml-[18px]  text-[15px] leading-normal text-[#DBD9D9] after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
              >
                SEO
              </a>
              <a
                onClick={() => changetab("tab4")}
                href="#"
                className={` ${
                  Tabs === "tab4"
                    ? "after:w-[80%] text-[#B00000]"
                    : "after:w-0 text-[#DBD9D9]"
                } duration-300 after:duration-300  font-Poppins font-semibold ml-[15px]  text-[15px] leading-normal text-[#DBD9D9] after:absolute relative  after:h-[1px] after:bg-[#B00000] after:left-[7%] after:bottom-[-5px] after:z-[2]`}
              >
                Email
              </a>
            </div>
            <h1 className="sm:text-[64px] text-[42px] font-bold leading-[54px] sm:leading-[77px] text-[#2E2E2E] font-Poppins lg:max-w-[608px] pt-[26px]">
              Premium Web
              {Tabs === "tab1" && " Hosting "}
              {Tabs === "tab2" && " Domain "}
              {Tabs === "tab3" && " SEO "}
              {Tabs === "tab4" && " Email "}
              for Your Website
            </h1>
            <p className=" lg:max-w-[448px] text-[#808080] font-Inter text-base font-normal leading-[28px] tracking-[0.8px] pt-[34px]">
              Blazing fast web hosting for individuals and businesses of all
              sizes backed by 24x7x365 Support.
            </p>
            <div className="md:pt-[60px] pt-8 flex items-center gap-[24px]">
              <button className="bg-[#B00000] hover:text-[#B00000] hover:bg-transparent border border-transparent hover:border-[#B00000] duration-300 text-white font-Poppins text-xs sm:text-sm font-normal leading-[24px] sm:p-[12px_13.5px] p-[12px] rounded-[8px] shadow-[0_0_64px_0_rgba(176,0,0,0.30)]">
                Create an Account
              </button>
              <button className="bg-transparent text-black font-Poppins text-xs sm:text-sm border border-black hover:border-[#B00000] hover:text-[#B00000] hover:bg-transparent duration-300 font-normal leading-[24px] sm:p-[12px_18px] p-[12px] rounded-[8px] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] ">
                Choose your plan
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-3 lg:pt-0 pt-6">
            <div className="relative max-w-[701px]  lg:max-w-[501px] lg:ml-auto">
              <img src={blackgril} alt="heroimg" className="w-full  h-full" />
              <span className=" absolute top-[63px] right-[-12px] xl:right-[-25px]">
                <Redtop />
              </span>
              <span className=" absolute bottom-[161px] left-[-12px] xl:left-[-26px]">
                <Redbetween />
              </span>
              <span className=" absolute bottom-[41px] right-[-12px] xl:right-[-25px]">
                <Redbottom />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
