import React from "react";
import { useContext } from "react";
import AmountContext from "../context/amountContext";

function Product(props) {
  let { amount, setAmount } = useContext(AmountContext);

  return (
    <div style={{ border: "2px solid black" }}>
      <h1>{props.data.title}</h1>
      <h2>{props.data.price}</h2>
      <button
        onClick={() => {
          setAmount(amount + props.data.price);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setAmount(amount - props.data.price);
        }}
      >
        remove from cart
      </button>
    </div>
  );
}

export default Product;
