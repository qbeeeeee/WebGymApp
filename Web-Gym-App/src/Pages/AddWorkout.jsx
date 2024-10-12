import React, { useState } from "react";

const AddWorkout = () => {
  const [exercise, setExercise] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME /{" "}
        <div className={`${exercise ? "" : "text-white"} `}>Add Workout </div>
        <div className="text-white" style={{ opacity: exercise ? 1 : 0 }}>
          <span className="text-red-500">/</span> {exercise}
        </div>
      </div>
      <div className="text-white text-4xl mt-36 flex flex-col items-center">
        Add Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>
      <div className="text-white mt-12 flex gap-7">
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
    </div>
  );
};

export default AddWorkout;
