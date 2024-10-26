import React, { useEffect, useState } from "react";
import "./../../assets/css/Custom.css";

const WeekAndDates = () => {
  const [selectDay, setSelectDay] = useState(null);
  const [startOfWeek, setStartOfWeek] = useState(null);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const today = new Date();
    const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    setSelectDay(currentDayIndex);

    // Calculate start of the week (Sunday of the current week)
    const start = new Date(today);
    start.setDate(today.getDate() - currentDayIndex);
    setStartOfWeek(start); // Set startOfWeek to state
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-14">
      {startOfWeek && (
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
                className={`text-center p-4 font-semibold cursor-pointer rounded-md transition duration-300 ${
                  index === selectDay
                    ? "bg-custom-yellow text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectDay(index)}
              >
                {day} {`${formattedMonth}/${formattedDay}`}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WeekAndDates;
