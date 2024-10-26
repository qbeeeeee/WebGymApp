import { createContext } from "react";

export const WorkoutContext = createContext();

const WorkoutContextProvider = (props) => {
  const fetchWorkout = async (
    userId,
    setLoading,
    setError,
    setTodaysWorkout
  ) => {
    try {
      // Check if workout exists
      const checkResponse = await fetch("/api/workout/checkTodayWorkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!checkResponse.ok) {
        const errorData = await checkResponse.json();
        throw new Error(errorData.message || "Error checking today's workout.");
      }

      const checkData = await checkResponse.json();

      // If workout exists, fetch workout data
      if (checkData.exists) {
        const workout = checkData.workout; // Get workout data from response
        setTodaysWorkout(workout);
      } else {
        console.log("No workout submitted for today.");
      }
    } catch (error) {
      setError(error.message); // Set error message if something goes wrong
    } finally {
      setLoading(false); // Set loading to false after check
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
