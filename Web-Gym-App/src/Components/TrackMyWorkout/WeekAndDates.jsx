import React, { useEffect, useState } from "react";
import "./../../assets/css/Custom.css";

const WeekAndDates = ({ selectedDate, setSelectedDate, todaysWorkout }) => {
  const [days, setDays] = useState([]);
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
    setSelectedDate(today.toISOString().split("T")[0]); // Set the selected date as today in YYYY-MM-DD format

    // Generate an array of dates for today and the previous 6 days
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date);
    }

    setDays(dates); // Set the calculated dates in state
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-14">
      {days.length > 0 && (
        <div className="flex space-x-4">
          {days
            .slice()
            .reverse()
            .map((currentDate, index) => {
              // Reverse the order of the dates here
              const formattedMonth = String(
                currentDate.getMonth() + 1
              ).padStart(2, "0");
              const formattedDay = String(currentDate.getDate()).padStart(
                2,
                "0"
              );
              const dayName = daysOfWeek[(currentDate.getDay() + 7) % 7]; // Get the correct day name

              // Format the date as YYYY-MM-DD
              const formattedDate = currentDate.toISOString().split("T")[0];

              return (
                <div
                  key={formattedDate} // Use the formatted date as the key
                  className={`text-center p-4 font-semibold cursor-pointer rounded-md transition duration-300 ${
                    formattedDate === selectedDate
                      ? todaysWorkout
                        ? "bg-green-500 text-black"
                        : "bg-red-500 text-black"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setSelectedDate(formattedDate)} // Set the formatted date on click
                >
                  {dayName} {`${formattedMonth}/${formattedDay}`}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default WeekAndDates;
