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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TrackMyWorkout = () => {
  const navigate = useNavigate();
  const { fetchWorkout } = useContext(WorkoutContext);

  const userId = useSelector((state) => state.user.currentUser?._id);
  const [todaysWorkout, setTodaysWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // Format the date to "YYYY-MM-DD"
    const formattedDate = date ? date.toISOString().split("T")[0] : "";
    setSelectedDate(formattedDate);
  };

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const today = `${year}-${month}-${day}`;
    fetchWorkout(
      userId,
      setLoading,
      setError,
      setTodaysWorkout,
      selectedDate ? selectedDate : today
    );
  }, [userId, selectedDate]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div className="text-white">Track My Workout</div>
      </div>
      <div className="text-white text-4xl font-semibold mt-36 flex flex-col items-center">
        Track Your Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>
      <WeekAndDates
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        todaysWorkout={todaysWorkout}
      />

      <div className="text-white mt-12 flex flex-col items-center gap-4">
        {/* <h1 className="text-lg">Or add your own date</h1>
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          className="border border-gray-600 w-[145px] text-white bg-neutral-800 rounded-md px-4 py-2 focus:outline-none focus:ring-1 
    focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
        /> */}
        {/* ----------TESTING---------- */}
        <h1 className="text-lg">Add your own date</h1>
        <div className="text-black flex items-center justify-center">
          <DatePicker
            selected={selectedDate ? new Date(selectedDate) : null}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            className="border border-gray-600 w-[125px] text-white bg-neutral-800 rounded-md px-4 py-2 focus:outline-none focus:ring-1 
    focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="text-white text-4xl mt-10 flex flex-col items-center">
        <div className="p-5 max-w-[80vw]]">
          {todaysWorkout ? (
            <div className="max-h-[450px] overflow-auto pr-3 flex gap-10 p-5">
              {todaysWorkout.exercises.map((exerciseItem, index) => (
                <div
                  key={index}
                  className="flex flex-col border-2 p-5 rounded-lg border-gray-600 pb-4 mb-4 hover:-translate-y-3 
                  hover:bg-neutral-800 hover:cursor-pointer transition duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xl font-bold text-white flex flex-col items-center">
                      {exerciseItem.exercise}
                      <hr className="w-[100%] h-0.5 mt-1 bg-red-500 border-0 mb-4" />
                    </div>
                  </div>
                  {exerciseItem.sets.map((set, setIndex) => (
                    <div
                      className="flex justify-between items-center text-lg text-gray-300 w-[250px]"
                      key={setIndex}
                    >
                      <div className="text-sm text-gray-400">
                        Set {setIndex + 1}:
                      </div>
                      <div>
                        <span className="font-semibold ">
                          {set.kg}kg x {set.reps} reps
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center bg-neutral-800 rounded-lg p-5 w-full max-w-2xl mx-auto mt-6">
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-300">
                  No submitted workout that day!
                </h2>
                <p className="text-gray-400 text-xl mt-2">
                  It seems you haven't logged any workouts yet. Don't forget to
                  track your progress!
                </p>
              </div>
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
