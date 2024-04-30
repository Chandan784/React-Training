let ShowDataFromInput = (props) => {
  console.log("props", props);

  let inputadata;
  function handelButton() {
    props.getData(inputadata);
  }

  function getInputValue(e) {
    console.log(e);

    inputadata = e.target.value;
    console.log(inputadata);
  }

  return (
    <>
      <input type="text" onChange={getInputValue} />
      <button onClick={handelButton}>show</button>
    </>
  );
};

export default ShowDataFromInput;
