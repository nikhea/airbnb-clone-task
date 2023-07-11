"use client";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import Container from "@/components/UI/Container";
import CategoryItem from "./CategoryItem";
import FilterIcon from "../../UI/ICons/FIliterIcon";
import { useCategoryStore } from "@/hooks/useCategoryStore";
import { BiBed } from "react-icons/bi";
import { useScrollBorder } from "@/hooks/useScrollBorder";

export const categories = [
  {
    label: "rooms",
    icon: BiBed,
    description: "This property is close to the beach!",
  },
  {
    label: "beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = ({ onCategoryChange }: any) => {
  const showBorder = useScrollBorder();
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
  };
  return (
    <div
      className={`sticky top-[94px] bottom-0 left-0 right-0 z-[999] bg-white ${
        showBorder ? " border-b-[1px] transition-shadow " : ""
      }`}
    >
      <Container>
        <div className="flex flex-row items-center justify-between gap-x-5">
          <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto ">
            {categories.map((item) => (
              <CategoryItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={selectedCategory === item.label}
                onClick={() => handleCategoryClick(item.label)}
              />
            ))}
          </div>
          <div className="flex flex-row items-center border-[1px] w-fit p-2 rounded-lg  shadow-sm hover:shadow-md transition cursor-pointer">
            <FilterIcon />
            <span className="pl-2 font-semibold text-[12px] leading-[16px]">
              Filiters
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
