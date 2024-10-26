import { errorHandler } from "../utils/error.js";
import Workout from "../models/workout.model.js";

export const allexercises = async (req, res, next) => {
  const { userId, exercises } = req.body;
  if (!userId || !exercises) {
    return next(errorHandler(400, "User ID and exercises are required."));
  }

  const date = new Date().setHours(0, 0, 0, 0); // Ensure date is set to today's date without time

  try {
    // Check if workout for today already exists
    const existingWorkout = await Workout.findOne({ userId, date });
    if (existingWorkout) {
      return next(errorHandler(400, "Workout for today already exists."));
    }

    // Create and save new workout
    const workout = new Workout({ userId, date, exercises });
    await workout.save();

    res.status(201).json({ message: "Workout saved successfully!", workout });
  } catch (error) {
    next(errorHandler(500, "An error occurred while saving the workout."));
  }
};

export const checkTodayWorkout = async (req, res, next) => {
  const { userId } = req.body; // Destructure userId from request body
  if (!userId) {
    return next(errorHandler(400, "User ID is required.")); // Return error if userId is not provided
  }

  const date = new Date().setHours(0, 0, 0, 0); // Today's date without time

  try {
    // Find if a workout exists for the given user and today's date
    const existingWorkout = await Workout.findOne({ userId, date });

    if (existingWorkout) {
      return res.status(200).json({ exists: true, workout: existingWorkout }); // Return workout if exists
    } else {
      return res.status(200).json({ exists: false }); // Workout does not exist
    }
  } catch (error) {
    next(errorHandler(500, "An error occurred while checking the workout.")); // Handle any errors
  }
};

export const deleteTodayWorkout = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return next(errorHandler(400, "User ID is required."));
  }

  const date = new Date().setHours(0, 0, 0, 0);

  try {
    const existingWorkout = await Workout.findOneAndDelete({ userId, date });

    if (existingWorkout) {
      return res.status(200).json({
        message: "Workout deleted successfully.",
        workout: existingWorkout,
      });
    } else {
      return res.status(404).json({ message: "No workout found for today." }); // Workout does not exist
    }
  } catch (error) {
    next(errorHandler(500, "An error occurred while deleting the workout.")); // Handle any errors
  }
};
