import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/Home";

import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import Service from "./component/service";

function App() {
  let [x, setX] = useState();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
