"use client";
import { BiSearch } from "react-icons/bi";
import style from "./style/search.module.scss";

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.search__Container}>
        <div className={style.search__text}>Anywhere</div>
        <div className={style.search__textBorder}>Any week</div>
        <div className={style.guest}>
          <div className={style.guest__text}>Add guests </div>
          <div className={style.guest__icon}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
