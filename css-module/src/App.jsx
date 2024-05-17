import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Home from "./component/Home/Home";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { gsap } from "gsap";
import { useEffect } from "react";

import Gsap from "./component/Gsap";

function App() {
  return (
    <>
      <Gsap />
    </>
  );
}

export default App;
