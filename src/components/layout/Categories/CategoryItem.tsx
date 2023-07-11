"use client";
import { IconType } from "react-icons";
import style from "./style/Categories.module.scss";
interface CategoryItemProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        ${style.categoryItem}
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div>{label}</div>
    </div>
  );
};

export default CategoryItem;
