import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dropdown from "./Dropdown";
function App() {
  let [bgColor, setBgColor] = useState("");

  let person = [
    {
      name: "chandan",
      hubby: ["coding", "read book", "volly"],
    },

    {
      name: "milan",
      hubby: ["football", "watch movie", "singing"],
    },

    {
      name: "himanshu",
      hubby: ["cricket", "read book", "drawing"],
    },
  ];

  function handelRedBtn() {
    setBgColor("red");
  }

  function handelGreenBtn() {
    setBgColor("green");
  }

  return (
    <>
      <button onClick={handelRedBtn}>red</button>
      <button onClick={handelGreenBtn}>green</button>
      <div className="parent" style={{ backgroundColor: bgColor }}></div>

      <Dropdown data={person} />
    </>
  );
}

export default App;
