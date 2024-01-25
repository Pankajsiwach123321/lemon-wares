import React from "react";
import { Redbetween, Redbottom, Redtop } from "../assets/svg/icon";

const GetIn = () => {
  let message = `1 day validity: Dial 1662#
30 day validity: Dial 1664#
1 GB/day for 28 days: Rs. 265
2 GB/day for 35 days: Rs. 289
4 GB/day for 30 days: Rs. 299
25 GB for 30 days: Rs. 296
1.5 GB/day for 28 days: Rs. 299`;
  function whatsapplink() {
    let whatsappurl = "whatsapp://send?text=" + encodeURIComponent(message);
    window.location.href = whatsappurl;
  }
  return (
    <div className="sm:pt-[125px] max-sm:py-[50px] sm:pb-[110px]" id="contact">
      <div className=" max-w-[1232px] px-3 mx-auto">
        <div className="lg:p-[80px_90px_88px_118px] p-[40px] sm:p-[40px_50px] bg-[#F7FAFE] rounded-2xl relative">
          <h2 className=" max-w-[1024px] text-[#2E2E2E] font-Poppins text-[20px] sm:text-[42px] md:text-[64px] font-bold leading-[35px] sm:leading-[71px] md:leading-[88px] text-center mx-auto">
            We're here to make your website awesome.
          </h2>
          <button
            onClick={whatsapplink}
            href="#"
            className="text-white hover:text-[#B00000] border-transparent border hover:border-[#b00000] group font-Poppins text-sm font-normal leading-[24px] flex items-center gap-[9px] p-[12px_16px] bg-[#B00000] hover:bg-transparent duration-300 rounded-[8px] max-w-[208px] mx-auto mt-[40px] "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:fill-[#B00000] duration-300"
                d="M20.1611 4.74121C18.1152 2.69043 15.3906 1.5625 12.4951 1.5625C6.51855 1.5625 1.65527 6.42578 1.65527 12.4023C1.65527 14.3115 2.15332 16.1768 3.10059 17.8223L1.5625 23.4375L7.30957 21.9287C8.8916 22.793 10.6738 23.2471 12.4902 23.2471H12.4951C18.4668 23.2471 23.4375 18.3838 23.4375 12.4072C23.4375 9.51172 22.207 6.79199 20.1611 4.74121ZM12.4951 21.4209C10.874 21.4209 9.28711 20.9863 7.90527 20.166L7.57812 19.9707L4.16992 20.8643L5.07812 17.5391L4.86328 17.1973C3.95996 15.7617 3.48633 14.1064 3.48633 12.4023C3.48633 7.43652 7.5293 3.39355 12.5 3.39355C14.9072 3.39355 17.168 4.33105 18.8672 6.03516C20.5664 7.73926 21.6113 10 21.6064 12.4072C21.6064 17.3779 17.4609 21.4209 12.4951 21.4209ZM17.4365 14.6729C17.168 14.5361 15.835 13.8818 15.5859 13.7939C15.3369 13.7012 15.1563 13.6572 14.9756 13.9307C14.7949 14.2041 14.2773 14.8096 14.1162 14.9951C13.96 15.1758 13.7988 15.2002 13.5303 15.0635C11.9385 14.2676 10.8936 13.6426 9.84375 11.8408C9.56543 11.3623 10.1221 11.3965 10.6396 10.3613C10.7275 10.1807 10.6836 10.0244 10.6152 9.8877C10.5469 9.75098 10.0049 8.41797 9.78027 7.87598C9.56055 7.34863 9.33594 7.42188 9.16992 7.41211C9.01367 7.40234 8.83301 7.40234 8.65234 7.40234C8.47168 7.40234 8.17871 7.4707 7.92969 7.73926C7.68066 8.0127 6.98242 8.66699 6.98242 10C6.98242 11.333 7.9541 12.6221 8.08594 12.8027C8.22266 12.9834 9.99512 15.7178 12.7148 16.8945C14.4336 17.6367 15.1074 17.7002 15.9668 17.5732C16.4893 17.4951 17.5684 16.9189 17.793 16.2842C18.0176 15.6494 18.0176 15.1074 17.9492 14.9951C17.8857 14.873 17.7051 14.8047 17.4365 14.6729Z"
                fill="white"
              />
            </svg>
            Get in touch with us
          </button>
          <span className=" absolute top-0 left-[35%] ">
            <Redtop />
          </span>
          <span className=" absolute bottom-[88px] left-[-15px] ">
            <Redbetween />
          </span>
          <span className=" absolute max-sm:bottom-[24px] bottom-[40px] right-[-12px] xl:right-[-25px]">
            <Redbottom />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetIn;
