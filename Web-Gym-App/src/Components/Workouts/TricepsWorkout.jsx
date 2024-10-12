import React from "react";
import tricepsWorkout from "./../../assets/img/tricepsWorkout.jpg";

const TricepsWorkout = () => {
  return (
    <div className="max-w-[450px] group relative cursor-pointer max-h-[260px] hover:z-20">
      <div>
        <img src={tricepsWorkout} alt="Back" className="w-full z-10 relative" />
      </div>
      <hr className="border-b-4 border-red-500" />
      <div className="bg-neutral-800 flex-col items-center p-6 transform translate-y-[-110%] duration-500 ease-in-out group-hover:translate-y-0 group-hover:rounded-b-xl">
        <div className="text-white text-4xl text-start">Triceps Workout</div>
        <div className="text-white mt-4 p-1">
          A triceps workout is vital for developing upper arm strength and
          definition, contributing to a well-rounded physique. By targeting the
          triceps, you improve pushing power, enhance overall arm stability.
        </div>
      </div>
    </div>
  );
};

export default TricepsWorkout;
