import { page1, page2, page3, box, heading } from "./Gsap.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let Gsap = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".p1 h1", {
      scale: 0,
      duration: 2,
    });
    gsap.from(".p2 .mybox", {
      x: 1200,

      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".p2 ",
        start: "top 50%",
      },
    });
    gsap.from(".p3 .mybox", {
      scale: 0,

      duration: 2,
      scrollTrigger: {
        trigger: ".p3 .mybox",
      },
    });
  });

  return (
    <>
      <div className={`${page1} p1`}>
        <h1 className={heading} id="firstText">
          Applute
        </h1>
      </div>

      <div className={`${page2} p2`}>
        <div className={`${box} mybox`}></div>
      </div>
      <div className={`${page3} p3`}>
        <div className={`${box} mybox`}></div>
      </div>
    </>
  );
};

export default Gsap;
