import React from "react";
import footerlogo from "../assets/images/footerlogo.webp";
const Footerlogo = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#B00000]">
      <div className="max-w-[1221px] mx-auto px-3 pt-8 sm:pt-[64px]">
        <div className="row">
          <div className="xl:w-5/12 lg:w-4/12 w-full px-3">
            <img src={footerlogo} alt="footerlogo" className=" cursor-pointer" />
            <p className=" max-w-[296px] font-Inter text-base font-normal leading-[32px] text-[#E6E6E6] pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>
          <div className="xl:w-7/12 lg:w-8/12 w-full px-3 pt-4">
            <div className="row">
              <div className="md:w-1/4 sm:w-1/3 flex  w-1/2 md:pt-0 pt-6 px-3">
                <div>
                    <ul>
                      <li className=" text-white font-Inter text-sm sm:text-base font-bold leading-[24px]">
                        Service
                      </li>
                    </ul>
                    <ul>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Domain
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Shared Hosting
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Cloud Hosting
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Private Hosting
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 md:flex md:justify-end  md:pt-0 pt-6 px-3">
                <div>
                    <ul>
                      <li className=" text-white font-Inter text-sm sm:text-base font-bold leading-[24px]">
                        Hosting
                      </li>
                    </ul>
                    <ul>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Cheap Hosting
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Hosting Wordpress
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Email Hosting
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Hosting Unlimited
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 md:flex md:justify-end md:pt-0 pt-6 px-3">
                <div>
                    <ul>
                      <li className=" text-white font-Inter text-sm sm:text-base font-bold leading-[24px]">
                        Company
                      </li>
                    </ul>
                    <ul>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          About
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Career
                        </a>
                      </li>
                      <li className="sm:pt-6 pt-3">
                        <a
                          href="#"
                          className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/3 w-1/2 md:flex md:justify-end md:pt-0 pt-6 px-3">
               <div>
                 <ul>
                   <li className=" text-white font-Inter text-sm sm:text-base font-bold leading-[24px]">
                     Help
                   </li>
                 </ul>
                 <ul>
                   <li className="pt-6">
                     <a
                       href="#"
                       className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                     >
                       FAQ
                     </a>
                   </li>
                   <li className="pt-6">
                     <a
                       href="#"
                       className="navhover after:bg-white  font-Inter text-sm sm:text-base font-normal text-[#E6E6E6]"
                     >
                       Help support
                     </a>
                   </li>
                 </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-white font-Inter text-sm sm:text-base font-normal leading-[32px] max-md:py-8 md:pt-[96px] md:pb-[80px]">
          Built by Jeremiah with &#129293; in Lagos. Copyright {year}
        </p>
      </div>
    </div>
  );
};

export default Footerlogo;
