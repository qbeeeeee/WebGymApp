import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const GraphChart = ({ type, data, backgroundColor }) => {
  // const lineData = {
  //   labels: data.flatMap((item) => item.sets.map(() => item.date)),
  //   datasets: [
  //     {
  //       label: "Number of Reps",
  //       data: data.flatMap((item) => item.sets.map((set) => set.reps)),
  //       backgroundColor: "rgba(153, 102, 255, 0.4)",
  //       borderColor: "rgba(75, 192, 192, 0.9)",
  //       fill: true,
  //       tension: 0.1,
  //       pointBackgroundColor: "rgba(0, 0, 0, 1)",
  //       pointBorderColor: "rgba(0, 0, 0, 1)",
  //       pointRadius: 4,
  //       pointHoverRadius: 10,
  //       pointHitRadius: 40,
  //     },
  //     {
  //       label: "Total kg Lifted",
  //       data: data.flatMap((item) => item.sets.map((set) => set.kg)),
  //       backgroundColor: "rgba(255, 99, 132, 0.4)",
  //       borderColor: "rgba(255, 99, 132, 0.9)",
  //       fill: true,
  //       tension: 0.1,
  //       pointBackgroundColor: "rgba(0, 0, 0, 1)",
  //       pointBorderColor: "rgba(0, 0, 0, 1)",
  //       pointRadius: 4,
  //       pointHoverRadius: 10,
  //       pointHitRadius: 40,
  //     },
  //   ],
  // };
  const setColors = [
    "rgba(135, 206, 235, 1)",
    "rgba(50, 205, 50, 1)",
    "rgba(220, 20, 60, 1)",
    "rgba(255, 215, 0, 1)",
    "rgba(199, 21, 133, 1)",
  ];

  const lineData = {
    labels: data.map((item) => item.date), // Only unique dates for x-axis labels
    datasets: [
      {
        label: "Reps",
        data: data.flatMap((item) =>
          item.sets.map((set) => ({
            x: item.date,
            y: set.reps,
          }))
        ),
        backgroundColor: "rgba(153, 102, 255, 0.4)",
        borderColor: "rgba(75, 192, 192, 0.9)",
        fill: true,
        tension: 0.1,
        pointBackgroundColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        pointBorderColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        pointRadius: 4,
        pointHoverRadius: 10,
        pointHitRadius: 40,
      },
      {
        label: "Kg",
        data: data.flatMap((item) =>
          item.sets.map((set) => ({
            x: item.date,
            y: set.kg,
          }))
        ),
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgba(255, 99, 132, 0.9)",
        fill: true,
        tension: 0.1,
        pointBackgroundColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        pointBorderColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        pointRadius: 4,
        pointHoverRadius: 10,
        pointHitRadius: 40,
      },
    ],
  };

  const barData = {
    labels: data.map((item) => item.date), // Unique dates for x-axis labels
    datasets: [
      {
        label: "Reps",
        data: data.flatMap((item) =>
          item.sets.map((set) => ({
            x: item.date,
            y: set.reps,
          }))
        ),
        backgroundColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        borderColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        borderWidth: 1,
      },
      {
        label: "Kg",
        data: data.flatMap((item) =>
          item.sets.map((set) => ({
            x: item.date,
            y: set.kg,
          }))
        ),
        backgroundColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        borderColor: data.flatMap((item) =>
          item.sets.map((_, index) => setColors[index % setColors.length])
        ),
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: data.labels,
    datasets: [
      {
        label: "",
        data: data.data,
        backgroundColor: backgroundColor,
        borderColor: "rgba(0,0,0,0.5)",
        borderWidth: 2,
        hoverOffset: 10,
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: false,
        grid: {
          display: true,
          color: "rgba( 255 , 255 , 255, 0.15)",
        },
      },
      x: {
        grid: {
          display: true,
          color: "rgba( 188 , 190 , 194, 0.05)",
        },
        ticks: {
          display: true, // Hide the labels (dates) on the X-axis
        },
      },
    },
  };

  const doughnutOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 16,
            family: "Inter",
          },
        },
      },
    },
    cutout: "50%",
  };

  const barOptions = {
    indexAxis: "x",
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: false,
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba( 255 , 255 , 255, 0.15)",
        },
      },
      x: {
        grid: {
          display: true,
          stacked: false,
          beginAtZero: true,
          color: "rgba( 188 , 190 , 194, 0.05)",
        },
      },
    },
  };

  return type === "bar" ? (
    <Bar data={barData} options={barOptions} />
  ) : type === "doughnut" ? (
    <Doughnut data={doughnutData} options={doughnutOptions} />
  ) : (
    <Line data={lineData} options={lineOptions} />
  );
};

export default GraphChart;
