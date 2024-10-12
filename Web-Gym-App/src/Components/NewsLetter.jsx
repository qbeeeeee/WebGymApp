import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewsLetter = ({ homepage, isHomepage }) => {
  return (
    <div
      style={{ display: isHomepage ? "none" : "" }}
      className={`${
        homepage ? "bg-opacity-65 " : ""
      } bg-neutral-800 flex items-center justify-center`}
    >
      <div className="text-white text-center mt-24">
        <div className="font-bold text-3xl">GET OUR GYM'S SPECIAL OFFERS</div>
        <div className="font-semibold text-2xl mt-3">
          and the Latest Tips and Tricks!
        </div>
        <div className="flex mt-10 items-center">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="bg-white w-full text-start text-gray-700 px-5 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-red-600"
          />
          <div className="bg-red-600 px-6 py-3.5 font-bold text-white rounded-r-md cursor-pointer hover:bg-red-700 transition duration-300">
            SUBSCRIBE
          </div>
        </div>
        <div className="mt-16 text-3xl font-bold">LET'S STAY CONNECTED</div>
        <div className="flex items-center justify-center gap-2 mt-8 mb-20">
          <div
            className="border-2 cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center p-3
          hover:bg-white hover:text-neutral-800 duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-5" />
          </div>
          <div
            className="border-2 cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center p-3
          hover:bg-white hover:text-neutral-800 duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-5" />
          </div>
          <div
            className="border-2 cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center p-3
          hover:bg-white hover:text-neutral-800 duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-5" />
          </div>
          <div
            className="border-2 cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center p-3
          hover:bg-white hover:text-neutral-800 duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5" />
          </div>
          <div
            className="border-2 cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center p-3
          hover:bg-white hover:text-neutral-800 duration-300"
          >
            <FontAwesomeIcon icon={faPinterest} className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
