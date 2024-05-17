import React from "react";
import { useRef } from "react";

function MyDataForm(props) {
  let useridRef = useRef();
  let passwordRef = useRef();
  function handelOnclick(e) {
    e.preventDefault();

    let data = {
      userid: useridRef.current.value,
      password: passwordRef.current.value,
    };

    props.setMyData(data);
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={useridRef} />
        <input type="password" name="" id="" ref={passwordRef} />
        <button onClick={handelOnclick}>Submit</button>
      </form>
    </div>
  );
}

export default MyDataForm;
