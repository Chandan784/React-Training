import style from "./Footer.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

let Footer = () => {
  useGSAP(() => {
    gsap.to(`.${style.box}`, {
      x: 1200,
      duration: 2,
      repeat: -1,
      rotate: 760,
      opacity: 1,
      scale: 1,
    });
  });

  return (
    <>
      <div className={style.box}></div>
      <div className={style.box}></div>
    </>
  );
};

export default Footer;
