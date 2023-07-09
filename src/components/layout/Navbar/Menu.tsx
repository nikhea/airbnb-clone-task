"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Avatar from "./Avatar";
import style from "./style/menu.module.scss";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className={style.menu}>
      <div className={style.menu__container}>
        <div className={style.menu__text}>Airbnb your home</div>
        <div className={style.menu__text}>
          <TbWorld size={20} />
        </div>

        <div onClick={toggleOpen} className={style.__toggleContainer}>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src="" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={style.__isOpen}>
          <div className={style.__isOpenContainer}>
            {
              <>
                <div className={style.__isOpenItem}>Login</div>
                <div className={style.__isOpenItem}>Sign up</div>
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
