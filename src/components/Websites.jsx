import React from "react";
import JPNL from '../assets/images/JPNL.webp'
import korane from '../assets/images/korane.webp'
import nadine from '../assets/images/nadine.webp'
import leeveon from '../assets/images/leevel.webp'
import jrang from '../assets/images/jrang.webp'
import invest from '../assets/images/crypto.webp'
const Websites = () => {
  return (
    <div className="sm:mt-[69px] mt-[32px]" id="blog">
      <div className="max-w-[1194px] mx-auto px-3">
        <div className="row items-center">
          <div className="md:w-7/12 w-full px-3 md:pl-[52px]">
            <h2 className=" lg:text-[48px] text-[38px] font-extrabold lg:leading-[64px] max-w-[445px] leading-[54px] font-Inter text-[#18191F]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className=" text-[#18191F] font-Inter text-[18px] pt-[30px] font-normal leading-[32px] max-w-[573px]">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="md:w-5/12 w-full px-3">
            <div className="row pt-[25px] items-center">
              <div className="w-1/3 px-3">
                <img src={JPNL} alt="cpanel" className="  " />
              </div>
               <div className="w-1/3 px-3">
                <img src={korane} alt="cpanel" className="  " />
              </div>
              <div className="w-1/3 px-3">
                <img src={nadine} alt="cpanel" className="  " />
              </div>
              <div className="w-1/3 px-3">
                <img src={leeveon} alt="cpanel" className=" " />
              </div>
              <div className="w-1/3 px-3">
                <img src={jrang} alt="cpanel" className=" " />
              </div>
              <div className="w-1/3 px-3 ">
                <img src={invest} alt="cpanel" className=" " />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
