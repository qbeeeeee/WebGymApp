import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import GraphStats from "../Components/Graphs/GraphStats";

const datatest = {
  labels: [
    "2024-10-25",
    "2024-10-26",
    "2024-10-27",
    "2024-10-28",
    "2024-10-29",
    "2024-10-30",
    "2024-10-31",
  ],
  data: [2, 2, 1, 1, 1, 1, 0],
};

const Graphs = () => {
  const userId = useSelector((state) => state.user.currentUser?._id);
  const [allTimeWorkout, setAllTimeWorkout] = useState([]);
  const [displayExerciseGraph, setDisplayExerciseGraph] = useState("");

  const processWorkoutData = (workoutData, exerciseName) => {
    const result = [];
    workoutData.forEach((workout) => {
      const date = workout.date;
      workout.exercises.forEach((exercise) => {
        if (exercise.exercise === exerciseName) {
          exercise.sets.forEach((set) => {
            const existingEntry = result.find((entry) => entry.date === date);

            if (existingEntry) {
              existingEntry.sets.push({ kg: set.kg, reps: set.reps });
            } else {
              result.push({
                date: date,
                sets: [{ kg: set.kg, reps: set.reps }],
              });
            }
          });
        }
      });
    });
    return result;
  };

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      try {
        const response = await fetch("/api/workout/getAllWorkoutsByUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.exists) {
          setAllTimeWorkout(data.workouts);
        } else {
          console.log("No workouts found for this user.");
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchAllWorkouts();
  }, []);

  const uniqueExercises = allTimeWorkout
    .flatMap((workout) => workout.exercises)
    .reduce((acc, exercise) => {
      // Check if the exercise name is already in the accumulator
      if (!acc.some((ex) => ex.exercise === exercise.exercise)) {
        acc.push(exercise);
      }
      return acc;
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div className="text-white">Graphs</div>
      </div>
      <div className="text-4xl mt-36 font-semibold flex flex-col items-center">
        All Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>

      <div className="container mx-auto text-white flex gap-2 mt-14">
        {allTimeWorkout.length > 0 ? (
          uniqueExercises.map((exercise) => (
            <div
              key={exercise._id}
              onClick={() => setDisplayExerciseGraph(exercise.exercise)}
              className={`text-md font-semibold text-white mt-4 mb-2 px-4 py-3 border border-gray-600 hover:-translate-y-2
                  hover:cursor-pointer transition ${
                    displayExerciseGraph === exercise.exercise
                      ? "bg-red-500"
                      : "hover:bg-neutral-800"
                  }`}
            >
              {exercise.exercise}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No workouts found for this user.</p>
        )}
      </div>

      <div className="mt-20 mb-20">
        <GraphStats
          type={"line"}
          title={displayExerciseGraph}
          data={processWorkoutData(allTimeWorkout, displayExerciseGraph)}
        />
      </div>
      <div className="mt-20 mb-20">
        <GraphStats
          type={"bar"}
          title={displayExerciseGraph}
          data={processWorkoutData(allTimeWorkout, displayExerciseGraph)}
        />
      </div>
      {/* <div className="mt-20 mb-20">
        <GraphStats
          type={"doughnut"}
          title={displayExerciseGraph}
          data={processWorkoutData(allTimeWorkout, displayExerciseGraph)}
        />
      </div> */}
    </div>
  );
};

export default Graphs;
