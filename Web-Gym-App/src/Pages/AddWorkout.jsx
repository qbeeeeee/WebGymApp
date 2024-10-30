import React, { useEffect, useState } from "react";
import AllWorkout from "../Components/AddWorkout/AllWorkout";
import AddRepsAndSets from "../Components/AddWorkout/AddRepsAndSets";
import { useLocation } from "react-router-dom";

const AddWorkout = () => {
  const [exercise, setExercise] = useState("Chest");
  const [allExercises, setAllExercises] = useState([]);
  const location = useLocation();
  const exercises = ["Chest", "Back", "Legs", "Biceps", "Triceps"];

  useEffect(() => {
    if (location.state?.workoutType === "Back") {
      setExercise("Back");
    } else if (location.state?.workoutType === "Legs") {
      setExercise("Legs");
    } else if (location.state?.workoutType === "Biceps") {
      setExercise("Biceps");
    } else if (location.state?.workoutType === "Triceps") {
      setExercise("Triceps");
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white">
      <div className="fixed top-[15%] left-[80%] w-full z-40">
        <AllWorkout
          allExercises={allExercises}
          setAllExercises={setAllExercises}
        />
      </div>

      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div>Add Workout </div>
        <div className="text-white">
          <span className="text-red-500">/</span> {exercise}
        </div>
      </div>
      <div className="text-4xl mt-36 font-semibold flex flex-col items-center">
        Add Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>
      <div className="mt-12 flex gap-7">
        {exercises.map((exerciseName) => (
          <div
            key={exerciseName}
            onClick={() => setExercise(exerciseName)}
            className={`${
              exercise === exerciseName ? "bg-red-500" : "bg-neutral-600"
            } py-2 px-4 rounded-lg cursor-pointer transition duration-300 text-md font-semibold`}
          >
            {exerciseName}
          </div>
        ))}
      </div>
      <AddRepsAndSets
        setAllExercises={setAllExercises}
        allExercises={allExercises}
        exercise={exercise}
      />
    </div>
  );
};

export default AddWorkout;
