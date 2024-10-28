import { createContext } from "react";

export const WorkoutContext = createContext();

const WorkoutContextProvider = (props) => {
  const fetchWorkout = async (
    userId,
    setLoading,
    setError,
    setTodaysWorkout,
    date
  ) => {
    try {
      setLoading(true);

      const checkResponse = await fetch("/api/workout/checkWorkoutByDate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, date }), // Send userId and date
      });

      if (!checkResponse.ok) {
        const errorData = await checkResponse.json();
        throw new Error(errorData.message || "Error checking today's workout.");
      }

      const checkData = await checkResponse.json();

      // If workout exists, set workout data
      if (checkData.exists) {
        const workout = checkData.workout; // Get workout data from response
        setTodaysWorkout(workout);
      } else {
        console.log("No workout submitted for this date.");
        setTodaysWorkout(null);
      }
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
    } finally {
      setLoading(false); // Stop loading after check
    }
  };

  const contextValue = {
    fetchWorkout,
  };

  return (
    <WorkoutContext.Provider value={contextValue}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
