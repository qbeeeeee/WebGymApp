import React from "react";
import GraphChart from "./GraphChart";

const GraphStats = ({ type, title, data }) => {
  const backgroundColors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(153, 102, 255, 0.5)",
  ];
  return (
    data && (
      <div className="w-[78vw] h-[45vh] position-relative">
        <h2 className="mb-5 text-xl font-semibold">{title}</h2>
        <GraphChart
          type={type}
          data={data}
          backgroundColor={backgroundColors}
        />
      </div>
    )
  );
};

export default GraphStats;
