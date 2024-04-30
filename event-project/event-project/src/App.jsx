import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowDataFromInput from "./component/ShowDataFromInput";

function App() {
  let [x, setX] = useState("");

  function getDataFromInput(inputData) {
    console.log("inputData", inputData);
    setX(inputData);
  }
  return (
    <>
      <center>
        <ShowDataFromInput getData={getDataFromInput} /> <br />
        {x}
      </center>
    </>
  );
}

export default App;
