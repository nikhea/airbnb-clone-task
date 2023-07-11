"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Avatar from "./Avatar";
import style from "./style/menu.module.scss";
import PersonAvatarIcon from "@/components/UI/ICons/PersonAvatarIcon";

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

        <div onClick={toggleOpen} className={style.toggleContainer}>
          <AiOutlineMenu />
          <div className={style.toggleContainer__Icon}>
            {/* <Avatar src="" /> */}
            <PersonAvatarIcon />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={style.toggleContainer__isOpen}>
          <div className={style.toggleContainer__isOpenContainer}>
            {
              <>
                <div className={style.toggleContainer__isOpenItem}>Login</div>
                <div className={style.toggleContainer__isOpenItem}>Sign up</div>
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
