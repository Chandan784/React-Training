import React from "react";
import author from "../../assets/react.svg";
import { FiShare2 } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
function BlogCard() {
  return (
    <div className=" w-full flex flex-col justify-center items-center bg-white  rounded-medium relative shadow-lg shadow-black ">
      <img
        className=" w-full  rounded-medium"
        src=" https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-youtube-thumbnail-maker-online-design-template-b0d0e1050e510fc2784b90d522d5bbe5_screen.jpg?ts=1662402001"
        alt=""
      />
      <p className=" font-medium py-4"> education</p>
      <h1 className=" text-2xl font-bold text-left w-full my-4 pl-4 pr-20">
        How to learn React and css in 2024 ?{" "}
      </h1>
      <p className=" font-normal w-full pr-10 pl-4 pb-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
        voluptas nulla temporibus odit recusandae ad suscipit natus.
      </p>
      <div className=" flex items-center justify-start w-full gap-4 pl-4 pb-4">
        <img className="h-10 rounded-full " src={author} alt="" />
        <div>
          <h1 className=" font-medium">Chandan Samantaray</h1>
          <p> 2h ago</p>
        </div>
      </div>
      <div className=" absolute right-0 top-64 text-2xl right-4 lg: top-80 lg:flex gap-4 ">
        <FiShare2 className=" mb-2" />
        <FcLike />
      </div>
    </div>
  );
}

export default BlogCard;
