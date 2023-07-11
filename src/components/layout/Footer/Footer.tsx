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
            <div className={style.footer__ItemsLeft}>
              <h2>&copy; 2023 Airbnb, inc.</h2>
              <ul>
                <li>terms</li>
                <li>
                  <span>.</span> sitmap
                </li>
                <li>
                  <span>.</span> privacy
                </li>
                <li>
                  <span>.</span> your privacy choices
                  <PrivacyChoicesIcon />
                </li>
                <li className="hidden lg:flex">
                  <span>.</span> destinations
                </li>
              </ul>
            </div>
            <div className={style.footer__ItemsRight}>
              <ul>
                <li className="">
                  <TbWorld size={20} className="mr-2" /> english (US)
                </li>
                <li>$ USD</li>
                <li className="lg:flex">
                  support & resources
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
