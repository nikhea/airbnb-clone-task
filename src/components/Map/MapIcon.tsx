import React from "react";
import { FaMap } from "react-icons/fa";

const MapIcon = () => {
  return (
    <div className="fixed z-50 flex items-center justify-center bottom-10">
      <div className="text-gray-300 bg-gray-950 rounded-3xl ">
        <h1>Show map </h1>
        <FaMap className="mr-2" />
      </div>
    </div>
  );
};

export default MapIcon;
