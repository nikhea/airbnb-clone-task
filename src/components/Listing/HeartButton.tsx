"use client";

import { useFavorites } from "@/hooks/useFavoritesStore";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {}

const HeartButton: React.FC<HeartButtonProps> = () => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className=" fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={isFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
