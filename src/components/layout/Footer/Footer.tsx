import React from "react";
import style from "./style/Footer.module.scss";
import Container from "@/components/UI/Container";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowUp } from "react-icons/md";
import PrivacyChoicesIcon from "@/components/UI/ICons/PrivacyChoicesIcon";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__Container}>
        <Container>
          <div className={style.footer__Items}>
            <div className="flex flex-col  lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 lg:gap-x-2 text-[#222]">
              <h2 className="capitalize">@2023 Airbnb, inc.</h2>
              <ul className="flex flex-row items-center text-sm font-normal capitalize gap-x-2 ">
                <li className="flex flex-row items-center">terms</li>
                <li className="flex flex-row items-center">
                  <span className="mr-1">.</span> sitmap
                </li>
                <li className="flex flex-row items-center">
                  <span className="mr-1">.</span> privacy
                </li>
                <li className="flex flex-row items-center">
                  <span className="mr-1">.</span> your privacy choices
                  <PrivacyChoicesIcon />
                </li>
                <li className="hidden lg:flex">
                  <span className="mr-1">.</span> destinations
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-row items-center text-sm font-semibold capitalize gap-x-2 text-[#222] ">
                <li className="flex flex-row items-center">
                  <TbWorld size={20} className="mr-2" /> english (US)
                </li>
                <li>$ USD</li>
                <li className="flex-row items-center hidden lg:flex">
                  {" "}
                  support & resources{" "}
                  <MdKeyboardArrowUp size={20} className="ml-2" />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
