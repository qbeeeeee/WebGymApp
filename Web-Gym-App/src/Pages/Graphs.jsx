import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Graphs = () => {
  const userId = useSelector((state) => state.user.currentUser?._id);
  const [allTimeWorkout, setAllTimeWorkout] = useState([]);
  console.log(allTimeWorkout);

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

  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white">
      <div className="text-red-500 text-md font-bold absolute left-[6%] top-[15%] flex gap-2">
        HOME / <div className="text-white">Graphs</div>
      </div>
      <div className="text-4xl mt-36 font-semibold flex flex-col items-center">
        All Workout
        <hr className="w-[55%] h-1.5 mt-4 bg-red-500 border-0 " />
      </div>

      <div className="container mx-auto p-4 text-white flex flex-wrap gap-10 mt-14">
        {allTimeWorkout.length > 0 ? (
          allTimeWorkout.map((workout) => (
            <div
              key={workout._id}
              className="border-2 p-5 rounded-lg border-gray-600 mb-4 shadow-md w-[350px]"
            >
              <h2 className="text-xl font-semibold mb-2">
                Workout Date: {workout.date}
              </h2>
              <div className="mt-4">
                {workout.exercises.map((exercise) => (
                  <div
                    key={exercise._id}
                    className="mb-2 p-5 mt-5 border border-gray-600 hover:-translate-y-2 
                  hover:bg-neutral-800 hover:cursor-pointer transition duration-300"
                  >
                    <div className="text-xl font-bold text-white">
                      {exercise.exercise}
                      <hr className="w-[100%] h-0.5 mt-1 bg-red-500 border-0 mb-4" />
                    </div>
                    {exercise.sets.map((set, index) => (
                      <div
                        className="flex justify-between items-center text-lg text-gray-300 w-[260px]"
                        key={index}
                      >
                        <div className="text-sm text-gray-400">
                          Set {index + 1}:
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
            </div>
          ))
        ) : (
          <p className="text-gray-600">No workouts found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default Graphs;
