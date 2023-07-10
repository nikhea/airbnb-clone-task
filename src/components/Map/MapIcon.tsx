"use client";
import { useContentStore } from "@/hooks/useContentStore";
import React from "react";
import { BiListUl } from "react-icons/bi";
import { FaMap } from "react-icons/fa";

const MapIcon = () => {
  const { isListingVisible, toggleListing } = useContentStore();

  return (
    <div
      onClick={toggleListing}
      className="fixed cursor-pointer z-[9999] left-[45%] p-3 bottom-32 lg:bottom-24 flex items-center justify-center "
    >
      <div className="flex items-center p-3 px-5 text-white bg-[#222222] rounded-3xl">
        <h1 className="flex items-center ">
          <span className="hidden mr-1 md:flex">Show</span>{" "}
          {isListingVisible ? "map" : "list"}
        </h1>
        {isListingVisible ? (
          <FaMap className="ml-2" />
        ) : (
          <BiListUl size={20} className="ml-2" />
        )}
      </div>
    </div>
  );
};

export default MapIcon;
