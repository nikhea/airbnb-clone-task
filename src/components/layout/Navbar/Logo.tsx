"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./style/logo.module.scss";
const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className={style.logo}
      src="/images/logo.png"
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo;
