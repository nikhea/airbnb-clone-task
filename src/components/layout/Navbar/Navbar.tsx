import React from "react";
import Container from "../../UI/Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import style from "./style/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__Container}>
        <Container>
          <div className={style.navbar__Items}>
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
