import {
  faCartShopping,
  faCircleChevronDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AllWorkout = () => {
  const [hideWorkout, setHideWorkout] = useState(false);
  return (
    <div className="w-60">
      <div
        className={`flex items-center justify-between bg-red-700 py-2 px-5 ${
          hideWorkout ? "rounded-lg" : "rounded-t-lg"
        } transform duration-300 ease-in-out`}
      >
        <div className="flex gap-3">
          <div>Todays Workout</div>
          <div className="relative hover:scale-105 cursor-pointer transition duration-200">
            <div
              className="absolute flex items-center justify-center text-red-500 text-xs font-semibold
           -top-2 -right-2 bg-yellow-400 rounded-full w-4"
            >
              5
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
            } transition duration-500`}
          />
        </div>
      </div>

      <div
        className={`${
          hideWorkout ? "hidden" : ""
        } bg-neutral-700 p-3 rounded-b-lg`}
      >
        <div>
          <div className="text-md font-semibold text-red-500">Chest</div>
          <div className="flex justify-between items-center">
            <div>1) Push Up 30x40 </div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white text-2xl hover:text-red-600 cursor-pointer transition duration-200"
            />
          </div>
        </div>
        <div>
          <div className="text-md font-semibold text-red-500">Back</div>
          <div className="flex justify-between items-center">
            <div> 1) Pull Up 10x20</div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white text-2xl hover:text-red-600 cursor-pointer transition duration-200"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-7 bg-red-500
            h-7 font-semibold text-md shadow-lg cursor-pointer hover:bg-red-600 rounded-md"
          style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
        >
          <div>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkout;
