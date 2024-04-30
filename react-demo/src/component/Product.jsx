import NodataFound from "./NodataFound";

let Product = (props) => {
  let mydata = props.data;
  console.log(mydata);
  return (
    <>
      {mydata.length == 0 ? (
        <NodataFound />
      ) : (
        mydata.map((name) => {
          return <h1>{name}</h1>;
        })
      )}
    </>
  );
};

export default Product;
