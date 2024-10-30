import express from "express";
import {
  addTodaysWorkout,
  checkWorkoutByDate,
  deleteTodayWorkout,
  getAllWorkoutsByUser,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.post("/addTodaysWorkout", addTodaysWorkout);
router.post("/checkWorkoutByDate", checkWorkoutByDate);
router.delete("/deleteTodayWorkout", deleteTodayWorkout);
router.post("/getAllWorkoutsByUser", getAllWorkoutsByUser);

export default router;
