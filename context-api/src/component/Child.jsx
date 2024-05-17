import React from "react";
import { useContext } from "react";
import NameContext from "../context/NameContext";
function Child() {
  let data = useContext(NameContext);
  console.log(data);
  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        backgroundColor: "green",
        fontSize: "100px",
      }}
    >
      {data.name}
    </div>
  );
}

export default Child;
