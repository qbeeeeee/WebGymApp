import bench from "./bench.svg";
import cableCrossOver from "./cableCrossOver.svg";
import dips from "./dips.svg";
import inlineBenchPress from "./inlineBenchPress.svg";
import machineFly from "./machineFly.svg";
import cycling from "./cycling.svg";
import pullDown from "./pullDown.svg";
import pullup from "./pullup.svg";
import pushUp from "./pushUp.svg";
import seatedCableRows from "./seatedCableRows.svg";
import shoulderPress from "./shoulderPress.svg";
import defaultBack from "./defaultBack.svg";
import legExercise from "./legExercise.svg";
import bicepsExercise from "./bicepsExercise.svg";
import tricepsExercise from "./tricepsExercise.svg";

let chestExercises = [
  {
    id: 1,
    name: "Bench Press",
    image: bench,
  },
  {
    id: 2,
    name: "Push Ups",
    image: pushUp,
  },
  {
    id: 3,
    name: "Dips",
    image: dips,
  },
  {
    id: 4,
    name: "Cable CrossOver",
    image: cableCrossOver,
  },
  {
    id: 5,
    name: "Inline Bench Press",
    image: inlineBenchPress,
  },
  {
    id: 6,
    name: "Machine Fly",
    image: machineFly,
  },
];

let backExercises = [
  {
    id: 1,
    name: "Pull Up",
    image: pullup,
  },
  {
    id: 2,
    name: "Pull Down",
    image: pullDown,
  },
  {
    id: 3,
    name: "Seated Cable Rows",
    image: seatedCableRows,
  },
  {
    id: 4,
    name: "T-Bar row",
    image: defaultBack,
  },
  {
    id: 5,
    name: "Cable Pullover",
    image: defaultBack,
  },
  {
    id: 6,
    name: "Reverse Dumbell Fly",
    image: defaultBack,
  },
];

let legExercises = [
  {
    id: 1,
    name: "Deadlift",
    image: legExercise,
  },
  {
    id: 2,
    name: "Leg Press",
    image: legExercise,
  },
  {
    id: 3,
    name: "Leg Curl",
    image: legExercise,
  },
  {
    id: 4,
    name: "Squat",
    image: legExercise,
  },
  {
    id: 5,
    name: "Leg Extension",
    image: legExercise,
  },
  {
    id: 6,
    name: "Calf Raises",
    image: legExercise,
  },
];

let bicepsExercises = [
  {
    id: 1,
    name: "Bicep Curl",
    image: bicepsExercise,
  },
  {
    id: 2,
    name: "Hammer Curl",
    image: bicepsExercise,
  },
  {
    id: 3,
    name: "EZ-Bar Curl",
    image: bicepsExercise,
  },
  {
    id: 4,
    name: "Barbell Curl",
    image: bicepsExercise,
  },
  {
    id: 5,
    name: "Cable Curl",
    image: bicepsExercise,
  },
  {
    id: 6,
    name: "Incline Curl",
    image: bicepsExercise,
  },
];

let tricepsExercises = [
  {
    id: 1,
    name: "Push Down",
    image: tricepsExercise,
  },
  {
    id: 2,
    name: "Overhead Triceps",
    image: tricepsExercise,
  },
  {
    id: 3,
    name: "Cable One Arm",
    image: tricepsExercise,
  },
  {
    id: 4,
    name: "Bench Dip",
    image: tricepsExercise,
  },
  {
    id: 5,
    name: "Skull Crusher",
    image: tricepsExercise,
  },
  {
    id: 6,
    name: "Dumbbell Kickback",
    image: tricepsExercise,
  },
];

export {
  chestExercises,
  backExercises,
  legExercises,
  bicepsExercises,
  tricepsExercises,
};
