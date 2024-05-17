import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Parent from "./component/Parent";
import NameContext from "./context/NameContext";
import Amount from "./component/Amount";
import Product from "./component/Product";
import AmountContext from "./context/amountContext";

function App() {
  let products = [
    {
      title: "iphone 15",
      price: 100000,
    },
    {
      title: "Macbook m5",
      price: 200000,
    },
    {
      title: "hp 256",
      price: 50000,
    },
    {
      title: "dell 150",
      price: 60000,
    },
  ];

  let [amount, setAmount] = useState(0);
  return (
    <>
      <AmountContext.Provider value={{ amount, setAmount }}>
        <Amount />
        {products.map((e) => {
          return <Product data={e} />;
        })}
      </AmountContext.Provider>
    </>
  );
}

export default App;
