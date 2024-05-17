import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./App.css";
import { useRef } from "react";
import Posts from "./component/Posts";

function App() {
  // let box1 = useRef();
  // gsap.registerPlugin(useGSAP);

  // let tl = gsap.timeline();
  // useGSAP(() => {
  //   tl.from(" .page1 h1", {
  //     y: -700,
  //     duration: 1,
  //     opacity: 0,
  //     delay: 1,
  //   });

  //   tl.from(box1.current, {
  //     duration: 1,
  //     opacity: 0,

  //     scale: 0.5,
  //   });

  //   tl.from(" .page2 .box", {
  //     duration: 1,
  //     opacity: 0,
  //     x: -700,

  //     scale: 0.5,
  //   });

  //   tl.from(" .page3 .box", {
  //     duration: 1,
  //     opacity: 0,
  //     x: 700,

  //     scale: 2,
  //   });
  // });

  return (
    <>
      <Posts />
    </>
  );
}

export default App;
