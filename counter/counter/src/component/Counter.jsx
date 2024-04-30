import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
let Counter = ({ setCountValue, countValue }) => {
  function handelAddBtn() {
    setCountValue(countValue + 1);
  }

  function handelSubtractBtn() {
    setCountValue(countValue - 1);
  }
  return (
    <>
      <h1 className="counter">{countValue}</h1>
      <IoIosAddCircle onClick={handelAddBtn} className="icon" />
      <GrSubtractCircle onClick={handelSubtractBtn} className="icon" />
    </>
  );
};

export default Counter;
