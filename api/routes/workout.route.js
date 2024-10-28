import express from "express";
import {
  allexercises,
  checkWorkoutByDate,
  deleteTodayWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.post("/allexercises", allexercises);
router.post("/checkWorkoutByDate", checkWorkoutByDate);
router.delete("/deleteTodayWorkout", deleteTodayWorkout);

export default router;
