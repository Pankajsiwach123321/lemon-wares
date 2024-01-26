import React from "react";
import cpanel from '../assets/images/cpanel.webp'
import imunify from '../assets/images/imunify.webp'
import lightspeed from '../assets/images/Litespeed.webp'
import softa from '../assets/images/soft.webp'
import wordpress from '../assets/images/wordpress.webp'
import cloudfare from '../assets/images/cloudflare.webp'
const TrueCloud = () => {
  return (
    <div className="sm:mt-[69px] mt-[32px]" id="bolg">
      <div className="max-w-[1284px] mx-auto px-3">
        <div className="row items-center">
          <div className="md:w-7/12 w-full px-3">
            <h2 className=" lg:text-[48px] text-[38px] font-extrabold lg:leading-[64px] leading-[45px] font-Inter text-[#18191F]">
              True Cloud Web Hosting
            </h2>
            <p className=" text-[#18191F] font-Inter text-[18px] sm:pt-[30px] pt-[24px] font-normal leading-[32px] max-w-[573px]">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="md:w-5/12 w-full px-3">
            <div className="row pt-[25px] items-center">
              <div className="w-1/3 px-3">
                <img src={cpanel} alt="cpanel" className=" aspect-[3/2]  " />
              </div>
              <div className="w-1/3 px-3">
                <img src={imunify} alt="cpanel" className=" aspect-[3/2]  " />
              </div>
              <div className="w-1/3 px-3">
                <img src={lightspeed} alt="cpanel" className=" aspect-[3/2]  " />
              </div>
              <div className="w-1/3 px-3 pt-[42px]">
                <img src={softa} alt="cpanel" className=" aspect-[3/2]" />
              </div>
              <div className="w-1/3 px-3 pt-[42px]">
                <img src={wordpress} alt="cpanel" className=" aspect-[3/2]" />
              </div>
              <div className="w-1/3 px-3 pt-[42px]">
                <img src={cloudfare} alt="cpanel" className=" aspect-[3/2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueCloud;
