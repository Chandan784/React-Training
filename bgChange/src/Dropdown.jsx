import { useState } from "react";

let Dropdown = ({ data }) => {
  let [personName, setPersonName] = useState("");
  let [hubby, setHubby] = useState([]);

  function handelOnchange(e) {
    console.log("onchange call");
    // setPersonName(e.target.option);
    console.log(e.target.value);
    let singleData = data.find((element) => {
      return element.name == e.target.value;
    });
    console.log("singledata", singleData);

    setHubby(singleData.hubby);
  }

  console.log(hubby);

  return (
    <>
      <select name="" id="" onChange={(e) => handelOnchange(e)}>
        <option>select name</option>
        {data.map((e) => {
          return <option value={e.name}>{e.name}</option>;
        })}
      </select>
      <select name="" id="">
        <option>hubby</option>
        {hubby.map((e) => {
          return <option>{e}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
