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

// let legExercises = [
//   {
//     id: 1,
//     name: "Squat",
//     image: squat,
//   },
//   {
//     id: 2,
//     name: "Leg Press",
//     image: legPress,
//   },
//   {
//     id: 3,
//     name: "Leg Curl",
//     image: legCurl,
//   },
// ];

// let bicepsExercises = [
//   {
//     id: 1,
//     name: "Bicep Curl",
//     image: bicepCurl,
//   },
//   {
//     id: 2,
//     name: "Hammer Curl",
//     image: hammerCurl,
//   },
// ];

// let tricepExercises = [
//   {
//     id: 1,
//     name: "Tricep Extension",
//     image: tricepExtension,
//   },
//   {
//     id: 2,
//     name: "Skull Crusher",
//     image: skullCrusher,
//   },
// ];

export { chestExercises, backExercises };
