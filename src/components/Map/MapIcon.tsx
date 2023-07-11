"use client";
import { useContentStore } from "@/hooks/useContentStore";
import React from "react";
import { BiListUl } from "react-icons/bi";
import { FaMap } from "react-icons/fa";
import style from "./style/mapIcon.module.scss";
const MapIcon = () => {
  const { isListingVisible, toggleListing } = useContentStore();

  return (
    <div onClick={toggleListing} className={style.mapIcon}>
      <div>
        <h1>
          <span>Show</span>
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
