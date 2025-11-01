import React from "react";

const Card = () => {
  return (
    <div className="group">
      <div className="relative transition-all duration-500 ease-in-out hover:bg-white hover:p-[45px] hover:shadow-2xl rounded-[36px] p-[20px] bg-white">
        <div className="relative flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
          <div className="size-[50px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] bg-[#FFF1DA] relative">
            <img
              src="/images/power-supply 1.svg"
              alt=""
              className="absolute -top-4 -left-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
        </div>
        <p className="font-semibold text-xl leading-[27px] text-[#1E1D4C] font-sans mt-[30px] text-center transition-colors duration-300 group-hover:text-[#1E1D4C]/80">
          Customization
        </p>
        <p className="font-normal text-base leading-[26px] text-[#5E6282] text-center transition-colors duration-300 group-hover:text-[#5E6282]/80">
          We deliver outsourced aviation services for military customers
        </p>
      </div>
    </div>
  );
};

export default Card;