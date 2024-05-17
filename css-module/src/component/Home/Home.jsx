import { useState } from "react";
import style from "./Home.module.css";
import MyDataForm from "./MyDataForm";
let Home = () => {
  let [mydata, setMyData] = useState({});
  console.log(mydata);

  return (
    <>
      <div className={style.home}>
        <h1>welcome to applute</h1>
        <MyDataForm setMyData={setMyData} />
        <div>
          <h1>{mydata.userid}</h1>
          <h1>{mydata.password}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
