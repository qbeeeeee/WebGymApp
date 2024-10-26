import React, { useContext, useEffect, useState } from "react";
import WeekAndDates from "../Components/TrackMyWorkout/WeekAndDates";
import ChestWorkout from "../Components/TrackMyWorkout/WorkoutsText/ChestWorkout";
import BackWorkout from "../Components/TrackMyWorkout/WorkoutsText/BackWorkout";
import LegWorkout from "../Components/TrackMyWorkout/WorkoutsText/LegWorkout";
import BicepsWorkout from "../Components/TrackMyWorkout/WorkoutsText/BicepsWorkout";
import TricepsWorkout from "../Components/TrackMyWorkout/WorkoutsText/TricepsWorkout";
import { useNavigate } from "react-router-dom";
import { WorkoutContext } from "../Context/WorkoutContext";
import { useSelector } from "react-redux";

const TrackMyWorkout = () => {
  const navigate = useNavigate();
  const { fetchWorkout } = useContext(WorkoutContext);

  const userId = useSelector((state) => state.user.currentUser?._id);
  const [todaysWorkout, setTodaysWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWorkout(userId, setLoading, setError, setTodaysWorkout);
  }, [userId]);

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

      <div className="text-white text-4xl mt-16 flex flex-col items-center">
        <div className="flex flex-col items-center">
          History
          <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 mb-14" />
        </div>
        <div className="bg-neutral-700 p-3 rounded-lg w-[450px]">
          {todaysWorkout && (
            <div className="max-h-[450px] overflow-auto pr-3">
              {todaysWorkout.exercises.map((exerciseItem, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b-2 border-gray-300 pb-3"
                >
                  <div className="flex justify-between mt-4">
                    <div className="text-lg font-semibold text-green-500">
                      {exerciseItem.exercise}
                    </div>
                  </div>
                  {exerciseItem.sets.map((set, setIndex) => (
                    <div
                      className="flex justify-between items-center text-lg"
                      key={setIndex}
                    >
                      <div>set {setIndex + 1}:</div>
                      <div>
                        {set.kg}kg x {set.reps}reps
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-white text-4xl mt-24 flex flex-col items-center">
        Add Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0" />
      </div>

      <div className="flex flex-col mt-24 items-center mb-48">
        <div className="flex gap-10">
          <div
            onClick={() => {
              navigate("/addworkout", { state: { workoutType: "Chest" } });
              window.scrollTo(0, 0);
            }}
          >
            <ChestWorkout />
          </div>
          <div
            onClick={() => {
              navigate("/addworkout", { state: { workoutType: "Back" } });
              window.scrollTo(0, 0);
            }}
          >
            <BackWorkout />
          </div>
          <div
            onClick={() => {
              navigate("/addworkout", { state: { workoutType: "Legs" } });
              window.scrollTo(0, 0);
            }}
          >
            <LegWorkout />
          </div>
        </div>
        <div className="flex gap-10 mt-32">
          <div
            onClick={() => {
              navigate("/addworkout", { state: { workoutType: "Biceps" } });
              window.scrollTo(0, 0);
            }}
          >
            <BicepsWorkout />
          </div>
          <div
            onClick={() => {
              navigate("/addworkout", { state: { workoutType: "Triceps" } });
              window.scrollTo(0, 0);
            }}
          >
            <TricepsWorkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackMyWorkout;
