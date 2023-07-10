import React from "react";
import { FaMap } from "react-icons/fa";

const MapIcon = () => {
  return (
    <div className="fixed z-50 left-[45%] p-3 bottom-32 flex items-center justify-center ">
      <div className="flex items-center p-3 text-white bg-[#222222] rounded-3xl">
        <h1>Show map </h1>
        <FaMap className="ml-2" />
      </div>
    </div>
  );
};

export default MapIcon;
