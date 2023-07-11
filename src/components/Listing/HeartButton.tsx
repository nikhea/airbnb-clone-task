"use client";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import style from "./style/heartButton.module.scss";
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
    <div onClick={handleButtonClick} className={style.heartButton}>
      <AiOutlineHeart size={28} className={style.heartButton__outline} />
      <AiFillHeart
        size={24}
        className={
          hasFavorite ? style.heartButton__fill : style.heartButton__unFill
        }
      />
    </div>
  );
};

export default HeartButton;
