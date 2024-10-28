import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
      unique: true, // Ensures only one workout per user per day when combined with userId
    },
    exercises: [
      {
        exercise: { type: String, required: true },
        sets: [
          {
            kg: { type: Number, required: true },
            reps: { type: Number, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

// Create a unique index to enforce one workout per user per day
workoutSchema.index({ userId: 1, date: 1 }, { unique: true });

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
