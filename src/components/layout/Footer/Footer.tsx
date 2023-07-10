import React from "react";
import style from "./style/Footer.module.scss";
import Container from "@/components/UI/Container";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__Container}>
        <Container>
          <div className={style.footer__Items}>
            <div className="flex flex-row items-center gap-x-2">
              <h2 className="capitalize">@2023 Airbnb, inc</h2>
              <ul className="flex flex-row items-center capitalize gap-x-2">
                <li>. terms</li>
                <li>. sitmap</li>
                <li>. privacy</li>
                <li>. your privacy choices</li>
                <li>. destinations</li>
              </ul>
            </div>
            <div>
            <ul className="flex flex-row items-center capitalize gap-x-2 text-bold">
                <li className="flex flex-row items-center">  <TbWorld size={20} /> english (US)</li>
                <li>$ USD</li>
                <li>. privacy</li>
                <li>support & resources</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
