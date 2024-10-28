import {
  faCartShopping,
  faCircleChevronDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WorkoutContext } from "../../Context/WorkoutContext";

const AllWorkout = ({ allExercises, setAllExercises }) => {
  const [hideWorkout, setHideWorkout] = useState(false);
  const userId = useSelector((state) => state.user.currentUser?._id);
  const [todaysWorkout, setTodaysWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitFlag, setSubmitFlag] = useState(false);

  const { fetchWorkout } = useContext(WorkoutContext);

  const removeExercise = (exerciseIndex) => {
    setAllExercises((prevExercises) =>
      prevExercises.filter((_, index) => index !== exerciseIndex)
    );
  };

  const submitWorkout = async () => {
    if (!allExercises || allExercises.length === 0) {
      console.log("No exercises to submit.");
      return;
    }
    try {
      const res = await fetch("/api/workout/allexercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          exercises: allExercises,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setAllExercises([]);
      }

      console.log(data.message);
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitFlag(!submitFlag);
    }
  };

  const deleteWorkout = async () => {
    try {
      const response = await fetch("/api/workout/deleteTodayWorkout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred while deleting the workout."
        );
      }
      if (response.ok) {
        setTodaysWorkout(null);
      }
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setSubmitFlag(!submitFlag);
    }
  };

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const today = `${year}-${month}-${day}`;
    fetchWorkout(userId, setLoading, setError, setTodaysWorkout, today);
  }, [userId, submitFlag]);

  return (
    <div className="w-60">
      <div
        className={`flex items-center justify-between ${
          todaysWorkout ? "bg-green-600" : "bg-red-700"
        } py-2 px-5 ${
          hideWorkout ? "rounded-lg" : "rounded-t-lg"
        } transform duration-300 ease-in-out`}
      >
        <div className="flex gap-3">
          <div>Todays Workout</div>
          <div className="relative hover:scale-105 cursor-pointer transition duration-200">
            <div
              className={`absolute flex items-center justify-center ${
                todaysWorkout
                  ? "text-black bg-green-100"
                  : "text-red-500 bg-yellow-400"
              }  text-xs font-semibold
         -top-2 -right-2  rounded-full w-4`}
            >
              {todaysWorkout
                ? todaysWorkout.exercises.length
                : allExercises.length}
            </div>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white text-xl"
            />
          </div>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => setHideWorkout(!hideWorkout)}
        >
          <FontAwesomeIcon
            icon={faCircleChevronDown}
            className={`${
              hideWorkout ? "-rotate-180" : ""
            } transition duration-300`}
          />
        </div>
      </div>

      <div
        className={`${
          hideWorkout ? "hidden" : ""
        } bg-neutral-700 p-3 rounded-b-lg `}
      >
        {todaysWorkout ? (
          <div className="max-h-[450px] overflow-auto pr-3">
            {todaysWorkout.exercises.map((exerciseItem, index) => (
              <div
                key={index}
                className="flex flex-col border-b-2 border-gray-300 pb-3"
              >
                <div className="flex justify-between mt-4">
                  <div className="text-md font-semibold text-green-500">
                    {exerciseItem.exercise}
                  </div>
                </div>
                {exerciseItem.sets.map((set, setIndex) => (
                  <div
                    className="flex justify-between items-center"
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
        ) : (
          <div className="max-h-[450px] overflow-auto pr-3">
            {allExercises.map((exerciseItem, index) => (
              <div
                key={index}
                className="flex flex-col border-b-2 border-gray-300 pb-3"
              >
                <div className="flex justify-between mt-4">
                  <div className="text-md font-semibold text-red-500">
                    {exerciseItem.exercise}
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="text-white text-2xl hover:text-red-600 cursor-pointer transition duration-200"
                      onClick={() => removeExercise(index)}
                    />
                  </div>
                </div>
                {exerciseItem.sets.map((set, setIndex) => (
                  <div
                    className="flex justify-between items-center"
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

        {!todaysWorkout && (
          <div
            className="flex justify-center items-center mt-7 bg-red-500 hover:bg-red-600
          h-7 font-semibold text-md shadow-lg cursor-pointer rounded-md"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
            onClick={() => submitWorkout()}
          >
            <div>Submit</div>
          </div>
        )}
        {todaysWorkout && (
          <div
            className="flex justify-center items-center mt-7 bg-red-500 hover:bg-red-600
          h-7 font-semibold text-md shadow-lg cursor-pointer rounded-md"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
            onClick={() => deleteWorkout()}
          >
            <div>Delete Workout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllWorkout;
