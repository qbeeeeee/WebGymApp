import React, { useState } from "react";
import {
  chestExercises,
  backExercises,
} from "./../assets/img/exercises/allExercises";
import test from "./../assets/img/exercises/bench.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import AllWorkout from "../Components/Workouts/AllWorkout";

const AddWorkout = () => {
  const [exercise, setExercise] = useState("Chest");
  const [exerciseName, setExerciseName] = useState("");
  const [numberOfSets, setNumberOfSets] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white">
      <div className="fixed top-[15%] left-[80%] w-full">
        <AllWorkout />
      </div>

      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div>Add Workout </div>
        <div className="text-white">
          <span className="text-red-500">/</span> {exercise}
        </div>
      </div>
      <div className="text-4xl mt-36 flex flex-col items-center">
        Add Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>
      <div className="mt-12 flex gap-7">
        <div
          onClick={() => setExercise("Chest")}
          className={`${
            exercise === "Chest" ? "bg-red-500" : "bg-neutral-600"
          }  py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
        >
          Chest
        </div>
        <div
          onClick={() => setExercise("Back")}
          className={`${
            exercise === "Back" ? "bg-red-500" : "bg-neutral-600"
          } py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
        >
          Back
        </div>
        <div
          onClick={() => setExercise("Legs")}
          className={`${
            exercise === "Legs" ? "bg-red-500" : "bg-neutral-600"
          } py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
        >
          Legs
        </div>
        <div
          onClick={() => setExercise("Biceps")}
          className={`${
            exercise === "Biceps" ? "bg-red-500" : "bg-neutral-600"
          } py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
        >
          Biceps
        </div>
        <div
          onClick={() => setExercise("Triceps")}
          className={`${
            exercise === "Triceps" ? "bg-red-500" : "bg-neutral-600"
          } py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
        >
          Triceps
        </div>
      </div>
      {exercise === "Chest" && (
        <div className="p-6 mt-20">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Chest Exercises
          </h2>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-hidden relative p-5 transition duration-700
            ${exerciseName !== "" ? "mr-64" : ""}`}
          >
            {chestExercises.map((exercise) =>
              exerciseName === "" ? (
                <div
                  onClick={() =>
                    setExerciseName(
                      exercise.name === exerciseName ? "" : exercise.name
                    )
                  }
                  key={exercise.id}
                  className={`bg-white min-w-[200px] shadow-md rounded-lg p-4 flex flex-col items-center group z-30
              hover:cursor-pointer text-gray-800 transition duration-300 hover:bg-red-500 hover:-translate-y-3 `}
                >
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-20 h-20 object-contain mb-4 group-hover:invert"
                  />
                  <h3 className="text-lg font-medium group-hover:invert">
                    {exercise.name}
                  </h3>
                </div>
              ) : (
                <div
                  onClick={() =>
                    setExerciseName(
                      exercise.name === exerciseName ? "" : exercise.name
                    )
                  }
                  key={exercise.id}
                  className="bg-white min-w-[200px]  shadow-md rounded-lg p-4 flex flex-col items-center group 
                      hover:cursor-pointer text-gray-800  transition duration-700 -translate-x-[700px] "
                >
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-20 h-20 object-contain mb-4 group-hover:invert transition duration-300"
                  />
                  <h3 className="text-lg font-medium group-hover:invert transition duration-300">
                    {exercise.name}
                  </h3>
                </div>
              )
            )}
          </div>

          {/* Reps Sets Kg */}
          <div
            className={`flex flex-col items-center justify-center mt-[-370px] z-20 relative transition-opacity duration-700 
              ${
                exerciseName !== ""
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="flex items-center justify-between gap-5 w-[445px]">
              <div className="flex items-center gap-5">
                <div
                  onClick={() => setExerciseName("")}
                  className="shadow-md rounded-lg p-4 flex flex-col items-center group z-30
                 hover:cursor-pointer text-gray-800 bg-yellow-300 transition duration-300 h-16 mb-4"
                >
                  <img
                    src={
                      chestExercises.find(
                        (exercise) => exercise.name === exerciseName
                      )?.image
                    }
                    className="w-10 h-10 object-contain mb-4 group-hover:invert"
                    alt={exerciseName}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-lg font-bold">{exerciseName}</div>
                  <div className="text-sm opacity-60">{exercise}</div>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  onClick={() => setExerciseName("")}
                  icon={faCircleXmark}
                  className="text-white text-2xl hover:text-red-600 cursor-pointer transition duration-200"
                />
              </div>
            </div>

            <div className="bg-neutral-800 p-5 rounded-lg mb-14 w-[450px]">
              <div className="flex items-center justify-center space-x-4">
                <h3 className="text-lg font-semibold">Number of Sets</h3>
                <input
                  type="number"
                  className="border w-[75px] text-black rounded-md px-4 py-2 focus:outline-none focus:ring-1 
            focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  placeholder={numberOfSets.toString() || "0"}
                  value={numberOfSets}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    console.log(value);
                    if (value <= 5 && value >= 0) {
                      setNumberOfSets(value);
                    }
                  }}
                />
              </div>

              <div className="bg-neutral-700 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-5">
                <div className="grid grid-cols-4 gap-4 text-white mb-4 border-b border-gray-600 pb-3">
                  <div className="text-center text-lg font-semibold">Set</div>
                  <div className="text-center text-lg font-semibold">Prev</div>
                  <div className="text-center text-lg font-semibold">Kg</div>
                  <div className="text-center text-lg font-semibold">Reps</div>
                </div>

                {Array.from({ length: numberOfSets }, (_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 mt-4 items-center text-white border-b border-gray-600 pb-3"
                  >
                    <div className="text-center text-lg">{index + 1}</div>
                    <div className="text-center text-lg">40x10</div>
                    <input
                      type="number"
                      placeholder="Kg"
                      className="border border-gray-500 rounded-lg px-4 py-2 w-[90px] bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 
                   focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      className="border border-gray-500 rounded-lg px-4 py-2 w-[90px] bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 
                   focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                    />
                  </div>
                ))}

                {numberOfSets > 0 && (
                  <div className="flex items-center justify-center mt-6">
                    <button
                      className="flex justify-center items-center bg-red-500 w-full h-12 text-lg font-semibold text-white rounded-lg 
                   shadow-lg hover:bg-red-600 transition-colors duration-300 ease-in-out"
                      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
                    >
                      Add Workout
                    </button>
                  </div>
                )}
              </div>

              {/* Store All Workouts */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWorkout;
