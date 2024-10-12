import React from "react";
import WeekAndDates from "../Components/WeekAndDates";
import ChestWorkout from "../Components/Workouts/ChestWorkout";
import BackWorkout from "../Components/Workouts/BackWorkout";
import LegWorkout from "../Components/Workouts/LegWorkout";
import BicepsWorkout from "../Components/Workouts/BicepsWorkout";
import TricepsWorkout from "../Components/Workouts/TricepsWorkout";

const TrackMyWorkout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div className="text-white">Track My Workout</div>
      </div>
      <div className="text-white text-4xl mt-36 flex flex-col items-center">
        Track Your Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>
      <WeekAndDates />

      <div className="text-white text-4xl mt-24 flex flex-col items-center">
        History
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 mb-24" />
      </div>

      <div className="text-white text-4xl mt-24 flex flex-col items-center">
        Add Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0" />
      </div>

      <div className="flex flex-col mt-24 items-center mb-48">
        <div className="flex gap-10">
          <ChestWorkout />
          <BackWorkout />
          <LegWorkout />
        </div>
        <div className="flex gap-10 mt-32">
          <BicepsWorkout />
          <TricepsWorkout />
        </div>
      </div>
    </div>
  );
};

export default TrackMyWorkout;
