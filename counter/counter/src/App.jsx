import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Counter from "./component/Counter";
Counter;
function App() {
  let [countValue, setCountValue] = useState(0);

  return (
    <>
      <center>
        <Counter setCountValue={setCountValue} countValue={countValue} />
      </center>
    </>
  );
}

export default App;
