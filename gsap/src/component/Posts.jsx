import { useEffect } from "react";

import PostCard from "./PostCard";
import { useState } from "react";

let Posts = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await response.json();
    setData(data);
  }

  return (
    <>
      <div
        style={{
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {data.map((e) => {
          return <PostCard cardData={e} />;
        })}
      </div>
    </>
  );
};

export default Posts;
