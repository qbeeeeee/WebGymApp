import React from "react";

const Spinner = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <div className="border-4 border-t-4 border-gray-200 border-t-white rounded-full w-6 h-6 animate-spin"></div>
    </div>
  );
};

export default Spinner;
