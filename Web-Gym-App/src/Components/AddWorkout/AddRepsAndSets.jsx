import React, { useEffect, useState } from "react";
import {
  chestExercises,
  backExercises,
  legExercises,
  bicepsExercises,
  tricepsExercises,
} from "../../assets/img/exercises/allExercises";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const AddChestWorkout = ({ setAllExercises, exercise, allExercises }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [numberOfSets, setNumberOfSets] = useState(0);
  const [displayExercises, setDisplayExercises] = useState([]);

  const [setsData, setSetsData] = useState([]);

  //display Correct Exercise Group
  useEffect(() => {
    if (exercise === "Chest") {
      setDisplayExercises(chestExercises);
    } else if (exercise === "Back") {
      setDisplayExercises(backExercises);
    } else if (exercise === "Legs") {
      setDisplayExercises(legExercises);
    } else if (exercise === "Biceps") {
      setDisplayExercises(bicepsExercises);
    } else if (exercise === "Triceps") {
      setDisplayExercises(tricepsExercises);
    }
  });

  //close exercises (kg-set-reps) if another exercize is chosen
  useEffect(() => {
    setExerciseName("");
    setNumberOfSets(0);
  }, [exercise]);

  useEffect(() => {
    setSetsData(
      Array.from({ length: numberOfSets }, (_, index) => ({
        kg: setsData[index]?.kg || "",
        reps: setsData[index]?.reps || "",
      }))
    );
  }, [numberOfSets]);

  const handleInputChange = (index, field, value) => {
    const updatedSets = [...setsData];
    updatedSets[index][field] = value;
    setSetsData(updatedSets);
  };

  const handleAddWorkout = (exerciseName) => {
    // Check if the exercise is already in the list
    const isExerciseAlreadyAdded = allExercises.some(
      (workout) => workout.exercise.toLowerCase() === exerciseName.toLowerCase()
    );

    // If it's already added, return early or show a message
    if (isExerciseAlreadyAdded) {
      console.log(`${exerciseName} has already been added.`);
      return;
    }

    // Check if any set in setsData has an empty value for kg or reps
    const hasIncompleteSet = setsData.some(
      (set) => set.kg === "" || set.reps === ""
    );
    if (hasIncompleteSet) {
      console.log(
        `Please fill in all kg and reps values before adding the workout.`
      );
      return;
    }

    // If not, add the new exercise
    const workoutData = {
      exercise: exerciseName,
      sets: setsData,
    };

    setAllExercises((prevWorkouts) => [...prevWorkouts, workoutData]);
    setExerciseName("");
    setNumberOfSets(0);
  };

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-10 text-center">
        {exercise} Exercises
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-hidden relative p-5 transition duration-700
    ${exerciseName !== "" ? "mr-64" : ""}`}
      >
        {displayExercises.map((exercise) =>
          exerciseName === "" ? (
            <div
              onClick={() =>
                setExerciseName(
                  exercise.name === exerciseName ? "" : exercise.name
                )
              }
              key={exercise.id}
              className={`bg-white min-w-[220px] shadow-md rounded-lg p-4 flex flex-col items-center group z-30
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
              className="bg-white min-w-[220px]  shadow-md rounded-lg p-4 flex flex-col items-center group 
              hover:cursor-pointer text-gray-800  transition duration-700 -translate-x-[800px] "
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
      ${exerciseName !== "" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex items-center justify-between gap-5 w-[445px]">
          <div className="flex items-center gap-5">
            <div
              onClick={() => {
                setExerciseName("");
                setNumberOfSets(0);
              }}
              className="shadow-md rounded-lg p-4 flex flex-col items-center group z-30
         hover:cursor-pointer text-gray-800 bg-yellow-300 transition duration-300 h-16 mb-4"
            >
              <img
                src={
                  displayExercises.find(
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
              onClick={() => {
                setExerciseName("");
                setNumberOfSets(0);
              }}
              icon={faCircleXmark}
              className="text-white text-2xl hover:text-red-600 cursor-pointer transition duration-200"
            />
          </div>
        </div>

        {allExercises.some(
          (workout) =>
            workout.exercise.toLowerCase() === exerciseName.toLowerCase()
        ) ? (
          <div className="bg-neutral-800 p-5 mt-4 rounded-lg mb-14 w-[450px] flex items-center justify-center">
            <div>Already added this exercise</div>
          </div>
        ) : (
          <div className="border-2 p-5 mt-2 rounded-lg border-gray-600 mb-24 w-[450px]">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col mt-1">
                <h3 className="text-lg font-semibold">Number of Sets</h3>
                <hr className="w-[100%] h-0.5 mt-1 bg-red-500 border-0 mb-4" />
              </div>
              <input
                type="number"
                className="border border-gray-600 w-[75px] text-white bg-neutral-800 rounded-md px-4 py-2 focus:outline-none focus:ring-1 
    focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                placeholder={numberOfSets.toString() || "0"}
                value={numberOfSets}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value <= 5 && value >= 0) {
                    setNumberOfSets(value);
                  }
                }}
              />
            </div>

            <div className="p-2 max-w-md mx-auto mt-5">
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
                  <div className="text-center text-gray-400 text-lg">
                    {index + 1}
                  </div>
                  <div className="text-center text-gray-400 text-lg">40x10</div>
                  <input
                    type="number"
                    placeholder="Kg"
                    onChange={(e) =>
                      handleInputChange(index, "kg", e.target.value)
                    }
                    className="border border-gray-500 rounded-lg px-4 py-2 w-[90px] bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 
           focus:ring-red-500 focus:border-transparent transition duration-200 ease-in-out"
                  />
                  <input
                    type="number"
                    placeholder="Reps"
                    onChange={(e) =>
                      handleInputChange(index, "reps", e.target.value)
                    }
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
                    onClick={() => handleAddWorkout(exerciseName)}
                  >
                    Add Workout
                  </button>
                </div>
              )}
            </div>

            {/* Store All Workouts */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddChestWorkout;
