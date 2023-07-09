"use client";
import { useListingStore } from "@/hooks/useListingStore";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  itemID: number;
  isFavorite: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({ itemID, isFavorite }) => {
  const { toggleFavorite } = useListingStore();

  return (
    <div
      onClick={toggleFavorite(itemID)}
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
