import { useRef } from "react";
import { useState } from "react";

let Form = () => {
  let [data, setData] = useState();
  let nameRef = useRef();

  function handelOnClick() {
    setData(nameRef.current.value);
  }

  return (
    <>
      <div>
        <form
          action=""
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="enteer name"
            ref={nameRef}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="enteer surname"
            ref={nameRef}
          />
          <button onClick={handelOnClick}>Add</button>
        </form>

        <h1>{data}</h1>
      </div>
    </>
  );
};

export default Form;
