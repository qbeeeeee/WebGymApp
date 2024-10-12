import React from "react";
import bicepsWorkout from "./../../assets/img/bicepsWorkout.jpg";

const TricepsWorkout = () => {
  return (
    <div className="max-w-[450px] group relative cursor-pointer max-h-[260px] hover:z-20">
      <div>
        <img src={bicepsWorkout} alt="Back" className="w-full z-10 relative" />
      </div>
      <hr className="border-b-4 border-red-500" />
      <div className="bg-neutral-800 flex-col items-center p-6 transform translate-y-[-110%] duration-500 ease-in-out group-hover:translate-y-0 group-hover:rounded-b-xl">
        <div className="text-white text-4xl text-start">Biceps Workout</div>
        <div className="text-white mt-4 p-1">
          A biceps workout is essential for building strength and definition in
          the upper arms, enhancing the overall aesthetics of your physique. By
          focusing on the biceps, you increase pulling power and improve overall
          arm coordination.
        </div>
      </div>
    </div>
  );
};

export default TricepsWorkout;
