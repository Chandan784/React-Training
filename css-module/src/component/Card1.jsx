import { useRef } from "react";
import { box } from "./Card1.module.css";
let Card1 = () => {
  let nameRef = useRef();
  let emailRef = useRef();

  function handelOnchange() {
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  }

  return (
    <>
      <div className={box}>
        <form action="">
          <input
            type="text"
            id="name"
            placeholder="enter name"
            ref={nameRef}
            onChange={handelOnchange}
          />
          <input
            type="text"
            id="email"
            placeholder="enter email"
            ref={emailRef}
            onChange={handelOnchange}
          />
          <input type="submit" value="sign in" />
        </form>

        {/* <div>
          name:{name}
          passwodd:{password}
        </div> */}
      </div>
    </>
  );
};

export default Card1;
