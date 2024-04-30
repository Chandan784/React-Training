let Card = (props) => {
  console.log(props);
  return (
    <>
      <img src={props.carImage} alt="" />
      <h1>{props.carname}</h1>
    </>
  );
};

export default Card;
