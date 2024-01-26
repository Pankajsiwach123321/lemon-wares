import React, { useState } from "react";
import { Tick } from "../assets/svg/icon";
const packagedataone = [
  {
    main: "Starter",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$2.80",
    money2: "$18.00",
  },
  {
    main: "Standard",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$4.20",
    money2: "$38.00",
  },
  {
    main: "Suprem",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$7.00",
    money2: "$68.00",
  },
];
const packagedatatwo = [
  {
    main: "Starter",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$22.80",
    money2: "$250.80",
  },
  {
    main: "Standard",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$44.20",
    money2: "$350.20",
  },
  {
    main: "Suprem",
    translate:
      "with all your customers via all conversation channels in one central dashboard.",
    money: "$77.00",
    money2: "$650.00",
  },
];
const Package = () => {
  const [Toggle, setToggle] = useState(false);
  const [Change, setChange] = useState("tab1");
  function togle() {
    setToggle(!Toggle);
  }
  function changetab(tab) {
    setChange(tab);
  }
  const packageview = packagedataone.map((e, index) => (
    <div
      key={index}
      className="lg:w-1/3 flex justify-center  sm:w-1/2 w-full px-3 pt-6"
    >
      <div className="sm:p-[34px_27px_48px_35px] p-[27px] max-w-[299px] rounded-[15px] border-[1.5px] border-[#C4C4C4] shadow-[0_0_4px_0_rgba(0,0,0,0.25)_inset]">
        <p className=" text-black font-Poppins text-[28px] font-semibold leading-[25px]">
          {e.main}
        </p>
        <p className=" font-Poppins text-xs font-normal leading-[18px] pt-[11px] max-w-[237px]">
          {e.translate}
        </p>
        <p className=" text-black font-Poppins text-[42px] font-semibold leading-[32px] sm:pt-[28px] pt-[24px]">
          {Toggle ? <span>{e.money2}</span> : <span>{e.money}</span>}
        </p>
        <p className="text-black font-Poppins text-sm font-light leading-[14px] pt-[11px]">
          {Toggle ? "Per year" : "Per month"}
        </p>
        <button
          className={` ${
            Toggle
              ? "hover:text-[#FFE87A] hover:shadow-[0_0_4px_0_#FFE87A)_inset] hover:border-[#FFE87A]"
              : "hover:text-[#B00000] hover:border-[#B00000] hover:shadow-[0_0_4px_0_#B00000)_inset]"
          } text-black   sm:mt-[35px] mt-[20px] font-Poppins text-sm font-semibold leading-[32px] py-[9px] w-full text-center border-[2px] border-black duration-300  rounded-[12px]`}
        >
          Choose this Plan
        </button>
        <div className="pt-[20px] sm:pt-[35px]">
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              2GB SSD
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              10GB Bandwidth
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              15 Email Accounts
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Unlimited Database
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              4 Subdomains
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              1 Parked Domain
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              2 Websites
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Free SSL
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Softaculous
            </p>
          </span>
        </div>
      </div>
    </div>
  ));
  const packageviewpremium = packagedatatwo.map((p, index) => (
    <div
      key={index}
      className="lg:w-1/3 sm:w-1/2 flex justify-center  w-full px-3 pt-6"
    >
      <div className="sm:p-[34px_27px_48px_35px] p-[27px] max-w-[299px] rounded-[15px] border-[1.5px] border-[#C4C4C4] shadow-[0_0_4px_0_rgba(0,0,0,0.25)_inset]">
        <p className=" text-black font-Poppins text-[28px] font-semibold leading-[25px]">
          {p.main}
        </p>
        <p className=" font-Poppins text-xs font-normal leading-[18px] pt-[11px] max-w-[237px]">
          {p.translate}
        </p>
        <p className=" text-black font-Poppins text-[42px] font-semibold leading-[32px] sm:pt-[28px] pt-[24px]">
          {Toggle ? <span>{p.money2}</span> : <span>{p.money}</span>}
        </p>
        <p className="text-black font-Poppins text-sm font-light leading-[14px] pt-[11px]">
          {Toggle ? "Per year" : "Per month"}
        </p>
        <button
          className={` ${
            Toggle
              ? "hover:text-[#FFE87A] hover:shadow-[0_0_4px_0_#FFE87A)_inset] hover:border-[#FFE87A]"
              : "hover:text-[#B00000] hover:border-[#B00000] hover:shadow-[0_0_4px_0_#B00000)_inset]"
          } text-black   sm:mt-[35px] mt-[20px] font-Poppins text-sm font-semibold leading-[32px] py-[9px] w-full text-center border-[2px] border-black duration-300  rounded-[12px]`}
        >
          Choose this Plan
        </button>
        <div className=" pt-[20px] sm:pt-[35px]">
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              2GB SSD
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              10GB Bandwidth
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              15 Email Accounts
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Unlimited Database
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              4 Subdomains
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              1 Parked Domain
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              2 Websites
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Free SSL
            </p>
          </span>
          <span className="flex items-center gap-[24px] pt-[15px]">
            <Tick />
            <p className=" text-[#808080] font-Inter text-base font-bold leading-[24px]">
              Softaculous
            </p>
          </span>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="sm:pt-[133px] pt-[60px]" id="account">
      <div className="max-w-[1097px] mx-auto px-3">
        <h2 className=" text-center max-w-[650px] mx-auto text-black font-Poppins text-[35px] sm:text-[50px] font-semibold leading-[45px] sm:leading-[60px]">
          Ready to get started with Lemon Wares?
        </h2>
        <p className=" text-black text-[25px] font-Poppins text-center font-normal leading-[25px] sm:pt-[38px] pt-[26px]">
          Choose the package that suits you
        </p>
        <div className="sm:pt-[57px] pt-[26px] sm:gap-[26px] gap-[13px] flex  justify-center items-center ">
          <p className=" text-center font-Poppins text-[25px] font-normal leading-[25px]">
            Monthly
          </p>
          <div
            onClick={togle}
            className={`w-[93px] cursor-pointer duration-300 h-[50px]  rounded-[73px] relative  ${
              Toggle ? "bg-[#FFE87A]" : "bg-[#B00000]"
            } `}
          >
            <span
              onClick={togle}
              className={`w-[30px] cursor-pointer h-[30px] bg-white duration-300 rounded-full absolute top-[10px] ${
                Toggle ? "left-[53px]" : "left-[9px]"
              }`}
            ></span>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-[17px] max-sm:pt-[40px]">
            <p className=" text-center font-Poppins text-[25px] font-normal leading-[25px]">
              Yearly
            </p>
            <p className="  text-nowrap font-Poppins text-[10px]  font-medium text-black bg-[#FFE87A] rounded-[8px] p-[7px_8px] leading-[9px]">
              20% discount
            </p>
          </div>
        </div>
        <div className="flex  max-w-[856px] mx-auto sm:pt-[85px] pt-[30px] border-b-[4px] border-b-[#C4C4C4] sm:mb-[59px] mb-[30px] pb-[6px] ">
          <p
            onClick={() => changetab("tab1")}
            className={` w-1/2 text-center font-Poppins duration-300 cursor-pointer text-2xl sm:text-[30px] font-semibold leading-[40px] text-black after:absolute relative  after:h-[4px]  after:left-0 after:-bottom-[10px]  pb-[6px] ${
              Change === "tab1" ? "after:w-full" : "after:w-0"
            } ${Toggle ? "after:bg-[#FFE87A]" : "after:bg-[#B00000]"} `}
          >
            Basic
          </p>
          <p
            onClick={() => changetab("tab2")}
            className={` w-1/2 text-center font-Poppins duration-300 cursor-pointer text-2xl sm:text-[30px] font-semibold leading-[40px] text-black after:absolute relative  after:h-[4px]  after:left-0 after:-bottom-[10px] ${
              Change === "tab2" ? "after:w-full" : "after:w-0"
            } ${Toggle ? "after:bg-[#FFE87A]" : "after:bg-[#B00000]"}`}
          >
            Premium
          </p>
        </div>
        {Change === "tab1" && (
          <div className="row justify-center"> {packageview}</div>
        )}
        {Change === "tab2" && (
          <div className="row justify-center">{packageviewpremium}</div>
        )}
      </div>
    </div>
  );
};

export default Package;
