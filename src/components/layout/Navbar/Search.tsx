"use client";
import { BiSearch } from "react-icons/bi";
import style from "./style/search.module.scss";
import FilterIcon from "@/components/UI/ICons/FIliterIcon";

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.search__LgContainer}>
        <div className={style.search__text}>Anywhere</div>
        <div className={style.search__textBorder}>Any week</div>
        <div className={style.guest}>
          <div className={style.guest__text}>Add guests </div>
          <div className={style.guest__icon}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
      <div className={style.search__SmContainer}>
        <div className="flex items-center gap-x-3">
          <BiSearch size={18} />
          <div className="flex flex-col items-center ">
            <div>Anywhere</div>
            <div className="flex items-center font-thin text-[##717171]">
              <div>Any week</div>
              <div>
                <span className="mr-1">.</span>Add guests{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-[1px] w-full  md:w-auto py-2 rounded-full  shadow-sm">
            <FilterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
