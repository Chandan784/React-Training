import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      home
      <button
        onClick={() => {
          navigate("/service");
        }}
        className=" bg-green-700 border-2 border-black"
      >
        go to service
      </button>
    </div>
  );
}

export default Home;
