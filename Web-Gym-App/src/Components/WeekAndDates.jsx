import React from "react";
import "./../assets/css/Custom.css";

const WeekAndDates = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date and day
  const today = new Date();
  const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayIndex);

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="flex space-x-4">
        {daysOfWeek.map((day, index) => {
          const currentDate = new Date(startOfWeek);
          currentDate.setDate(startOfWeek.getDate() + index);

          const formattedMonth = String(currentDate.getMonth() + 1).padStart(
            2,
            "0"
          );
          const formattedDay = String(currentDate.getDate()).padStart(2, "0");

          return (
            <div
              key={day}
              className={`text-center p-4 font-semibold cursor-pointer rounde-sm transition duration-300 ${
                index === currentDayIndex
                  ? "bg-custom-yellow text-black"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {day} {`${formattedMonth}/${formattedDay}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekAndDates;
