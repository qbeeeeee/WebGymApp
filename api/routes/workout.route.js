import express from "express";
import {
  allexercises,
  checkTodayWorkout,
  deleteTodayWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.post("/allexercises", allexercises);
router.post("/checkTodayWorkout", checkTodayWorkout);
router.delete("/deleteTodayWorkout", deleteTodayWorkout);

export default router;
