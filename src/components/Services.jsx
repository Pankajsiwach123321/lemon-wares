import React from "react";
import { Certifiacte, Hosting, Support, Uptime } from "../assets/svg/icon";
const Servicesdata = [
  {
    icon: <Uptime />,
    title: "99.9% Uptime",
    info: `We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
  },
  {
    icon: <Hosting />,
    title: "Blazing Fast Web Hosting",
    info: `We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
  },
  {
    icon: <Certifiacte />,
    title: "Free SSL Certificates",
    info: `We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
  },
  {
    icon: <Support />,
    title: "24x7 Friendly Support",
    info: `We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.`,
  },
];
const Services = () => {
  const showdata = Servicesdata.map((e, index) => (
    <div key={index} className="md:w-1/4 pt-[26px] sm:w-1/2 w-full px-3">
      <div className="text-center mx-auto flex flex-col items-center h-full">
        {e.icon}
        <p className=" text-black font-Poppins sm:text-xl text-base sm:font-bold font-medium leading-normal pt-3 pb-1">
          {e.title}
        </p>
        <p className=" max-w-[252px] text-black text-center font-Poppins text-xs font-light leading-normal">
          {e.info}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="pt-[92px]" id="service">
      <div className="max-w-[1188px] mx-auto px-3">
        <div className="row">{showdata}</div>
      </div>
    </div>
  );
};

export default Services;
