import React from "react";
import backWorkout from "./../../assets/img/backWorkout.jpg";

const BackWorkout = () => {
  return (
    <div className="max-w-[450px] group relative cursor-pointer max-h-[260px] hover:z-20">
      <div>
        <img src={backWorkout} alt="Back" className="w-full z-10 relative" />
      </div>
      <hr className="border-b-4 border-red-500" />
      <div className="bg-neutral-800 flex-col items-center p-6 transform translate-y-[-110%] duration-500 ease-in-out group-hover:translate-y-0 group-hover:rounded-b-xl">
        <div className="text-white text-4xl text-start">Back Workout</div>
        <div className="text-white mt-4 p-1">
          A back workout is essential for developing strength and stability in
          the upper body, enhancing posture, and preventing injuries.
        </div>
      </div>
    </div>
  );
};

export default BackWorkout;
