import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  let blogs = [1, 2, 7, 3, 4, 6, 6];
  return (
    <>
      <h1 className=" w-full text-center text-blue-500 font-bold text-2xl  border-2 border-black py-4 px-12">
        {" "}
        Explore Blogs
      </h1>
      <div className=" h-fit grid grid-cols-4  w-full gap-6   bg-blue-600 p-8">
        {blogs.map(() => {
          return <BlogCard />;
        })}
      </div>
    </>
  );
}

export default Blogs;
