import React from "react";
import chestWorkout from "./../../../assets/img/chestWorkout.jpg";

const ChestWorkout = () => {
  return (
    <div className="max-w-[450px] group relative cursor-pointer max-h-[260px] hover:z-20">
      <div>
        <img src={chestWorkout} alt="Chest" className="w-full z-10 relative" />
      </div>
      <hr className="border-b-4 border-red-500" />
      <div className="bg-neutral-800 flex-col items-center p-6 transform translate-y-[-110%] duration-500 ease-in-out group-hover:translate-y-0 group-hover:rounded-b-xl">
        <div className="text-white text-4xl text-start">Chest Workout</div>
        <div className="text-white mt-4 p-1">
          A chest workout is fundamental for achieving a powerful and
          well-defined upper body. Targeting the pectoral muscles enhances
          strength, boosts athletic performance, and elevates your confidence.
        </div>
      </div>
    </div>
  );
};

export default ChestWorkout;
