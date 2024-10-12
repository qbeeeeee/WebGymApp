import React from "react";

const Footer = () => {
  return (
    <div className="bg-custom-yellow min-h-[20vh] flex items-center justify-center">
      <div className="flex items-center justify-center gap-12 sm:gap-20 lg:gap-80">
        <div className="max-w-[100px] sm:max-w-[300px] ml-4">
          <h1 className="italic font-bold text-sm sm:text-xl lg:text-3xl">
            MAILING ADDRESS
          </h1>
          <div className="text-xs sm:text-md lg:text-lg font-semibold cursor-pointer hover:underline">
            244 bla bla , Katerini , 60100
          </div>
        </div>
        <div className="max-w-[100px] sm:max-w-[300px]">
          <h1 className="italic font-bold text-sm sm:text-xl lg:text-3xl">
            EMAIL ADDRESS
          </h1>
          <div className="relative right-7 md:right-0 text-xs sm:text-md lg:text-lg font-semibold cursor-pointer hover:underline">
            papadokonst@gmail.com
          </div>
        </div>
        <div className="max-w-[100px] sm:max-w-[300px]">
          <h1 className="italic font-bold text-sm sm:text-xl lg:text-3xl">
            PHONE NUMBER
          </h1>
          <div className="text-xs sm:text-md lg:text-lg font-semibold cursor-pointer hover:underline">
            697 *** ****
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
