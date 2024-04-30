import "./App.css";
import Card from "./component/Card";

import Product from "./component/Product";

function App() {
  let data = ["chandan"];

  return (
    <>
      <center>
        <Product data={data} x={1} />
      </center>
    </>
  );
}

export default App;
