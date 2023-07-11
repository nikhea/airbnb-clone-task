"use client";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  itemID: number;
  isFavorite: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = () => {
  const [hasFavorite, setIsFavorite] = useState(false);
  const handleButtonClick = () => {
    setIsFavorite(!hasFavorite);
  };
  return (
    <div
      onClick={handleButtonClick}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className=" fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
