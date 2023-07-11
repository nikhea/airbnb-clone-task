"use client";
import style from "./style/container.module.scss";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={`${style.container} mx-autoxl:px-20`}>{children}</div>;
};

export default Container;
