import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex relative items-center mt-20">
      <div className="w-1/2">
        <div className="font-bold text-[20px] leading-[30px] text-[#DF6951] font-poppins mb-6 uppercase">
          Best Destinations around the world
        </div>
        <h1 className="mb-[30px] font-volkhav">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="font-normal text-base leading-[30px] text-[#5E6282] mb-[34px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center">
          <Button
            className={
              "font-medium text-lg leading-[23px] text-white px-[26px] py-[18px] h-fit bg-[#F2994A] shadow-[0px_20px_35px_0px_#F1A50126]"
            }
          >
            Find out more
          </Button>
          <Button
            className={
              "size-[52px] rounded-full shadow-[0px_15px_30px_0px_#DF69514D] bg-[#DF6951] ml-11"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M11.25 6.49518L-6.11749e-07 12.9904L-4.39216e-08 -1.28895e-05L11.25 6.49518Z"
                fill="white"
              />
            </svg>
          </Button>
          <p className="font-normal text-[17px] leading-[26px] text-[#686D77] font-poppins ml-[21px]">
            Play Demo{" "}
          </p>
        </div>
      </div>
      <div className="flex-1 absolute right-0">
        <img src="/images/Image.svg" alt="" />
      </div>
      <div className="flex-1 opacity-0">
        <img src="/images/Image.svg" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
