import React from "react";
import cli from "../assets/images/crypto.webp";
import jpnl from "../assets/images/jnl.png";
import Branding from "../assets/images/leeve.png";
import { Sortcolone } from "../assets/svg/icon";
const RealStory = () => {
  return (
    <div className="sm:pt-[161px] pt-[70px] sm:pb-[54px]" id="about">
      <div className=" max-w-[920px] mx-auto px-3">
        <div className="row">
          <div className="md:w-1/2 w-full px-3">
            <h2 className=" sm:text-[48px] text-[38px] max-w-[445px] font-extrabold leading-[64px] font-Inter text-[#18191F] relative after:absolute after:left-[-12px] lg:after:left-[-55px] xl:after:left-[-95px] after:top-[-56px] z-1 after:z-[-1] after:content-[url(./assets/images/bigmark.png)] after:w-[143px] after:h-[120px]">
              Real Stories from Real Customers
            </h2>
            <p className="text-[#18191F] font-Inter text-lg font-normal leading-[32px] pt-2">
              Get inspired by these stories.
            </p>
            <div className=" md:flex md:justify-end pt-6">
              <div className="md:max-w-[350px] shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] p-[46px_32px_96px_32px] rounded-[8px] ">
                <img src={cli} alt="cli" className="pl-[32px]" />
                <div className="flex gap-[16px]">
                  <Sortcolone />
                  <div>
                    <p className=" font-Inter text-base  font-normal leading-[32px] text-black pt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                    <p className=" font-Inter text-lg font-bold leading-[28px] text-[#18191F] pt-[24px]">
                      Floyd Miles
                    </p>
                    <p className=" text-[#969BAB] font-Inter text-sm font-medium leading-[24px]">
                      Vice President, CLI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 pt-6 md:pt-12">
            <div className="shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] p-[39px_32px_14px_32px] rounded-[8px] ">
              <img src={jpnl} alt="cli" className="pl-[32px]" />
              <div className="flex gap-[16px]">
                <Sortcolone />
                <div>
                  <p className=" font-Inter text-base  font-normal leading-[32px] text-black pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                  <p className=" font-Inter text-lg font-bold leading-[28px] text-[#18191F] pt-[24px]">
                    Jane Cooper
                  </p>
                  <p className=" text-[#969BAB] font-Inter text-sm font-medium leading-[24px]">
                    CEO, JPNL
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] p-[41px_32px_32px_32px] rounded-[8px] mt-[32px] md:max-w-[350px] ">
              <img src={Branding} alt="cli" className="pl-[32px]" />
              <div className="flex gap-[16px]">
                <Sortcolone />
                <div>
                  <p className=" font-Inter text-base  font-normal leading-[32px] text-black pt-2">
                    LemonWares saved our time in Hosting my company page.
                  </p>
                  <p className=" font-Inter text-lg font-bold leading-[28px] text-[#18191F] pt-[24px]">
                    Kristin Watson
                  </p>
                  <p className=" text-[#969BAB] font-Inter text-sm font-medium leading-[24px]">
                    Co-Founder, LeeveOn Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStory;
