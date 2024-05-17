import React from "react";
import { useContext } from "react";
import AmountContext from "../context/amountContext";

function Amount() {
  let data = useContext(AmountContext);
  return <div style={{ fontSize: "100px" }}>total amount -{data.amount}</div>;
}

export default Amount;
