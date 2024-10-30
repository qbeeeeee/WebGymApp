import { errorHandler } from "../utils/error.js";
import Workout from "../models/workout.model.js";

export const addTodaysWorkout = async (req, res, next) => {
  const { userId, exercises } = req.body;
  if (!userId || !exercises) {
    return next(errorHandler(400, "User ID and exercises are required."));
  }

  const date = new Date();
  const year = date.getFullYear(); // Gets the current year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Gets the current month (0-11) and pads with a leading zero
  const day = String(date.getDate()).padStart(2, "0"); // Gets the current day and pads with a leading zero

  const formattedDate = `${year}-${month}-${day}`;

  try {
    // Check if workout for today already exists
    const existingWorkout = await Workout.findOne({
      userId,
      date: formattedDate,
    });
    if (existingWorkout) {
      return next(errorHandler(400, "Workout for today already exists."));
    }

    // Create and save new workout
    const workout = new Workout({ userId, date: formattedDate, exercises });
    await workout.save();

    res.status(201).json({ message: "Workout saved successfully!", workout });
  } catch (error) {
    next(errorHandler(500, "An error occurred while saving the workout."));
  }
};

export const checkWorkoutByDate = async (req, res, next) => {
  const { userId, date } = req.body;

  if (!userId) {
    return next(errorHandler(400, "User ID is required."));
  }

  if (!date) {
    return next(errorHandler(400, "Date is required."));
  }

  try {
    const existingWorkout = await Workout.findOne({
      userId,
      date: date,
    });

    if (existingWorkout) {
      return res.status(200).json({ exists: true, workout: existingWorkout });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    next(errorHandler(500, "An error occurred while checking the workout."));
  }
};

export const deleteTodayWorkout = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return next(errorHandler(400, "User ID is required."));
  }

  const date = new Date();
  const year = date.getFullYear(); // Gets the current year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Gets the current month (0-11) and pads with a leading zero
  const day = String(date.getDate()).padStart(2, "0"); // Gets the current day and pads with a leading zero

  const formattedDate = `${year}-${month}-${day}`;

  try {
    const existingWorkout = await Workout.findOneAndDelete({
      userId,
      date: formattedDate,
    });

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

export const getAllWorkoutsByUser = async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return next(errorHandler(400, "User ID is required."));
  }

  try {
    const workouts = await Workout.find({ userId });

    if (workouts.length > 0) {
      return res.status(200).json({ exists: true, workouts });
    } else {
      return res.status(200).json({ exists: false, workouts: [] });
    }
  } catch (error) {
    return next(
      errorHandler(500, "An error occurred while retrieving workouts.")
    );
  }
};
