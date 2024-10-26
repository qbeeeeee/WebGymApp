import React from "react";
import legWorkout from "./../../../assets/img/legWorkout.png";

const LegWorkout = () => {
  return (
    <div className="max-w-[450px] group relative cursor-pointer max-h-[260px] hover:z-20">
      <div>
        <img src={legWorkout} alt="Leg" className="w-full z-10 relative" />
      </div>
      <hr className="border-b-4 border-red-500" />
      <div className="bg-neutral-800 flex-col items-center p-6 transform translate-y-[-110%] duration-500 ease-in-out group-hover:translate-y-0 group-hover:rounded-b-xl">
        <div className="text-white text-4xl text-start">Leg Workout</div>
        <div className="text-white mt-4 p-1">
          A leg workout is essential for building strength, power, and endurance
          in the lower body.You not only enhance your athletic performance but
          also improve your overall stability and balance.
        </div>
      </div>
    </div>
  );
};

export default LegWorkout;
