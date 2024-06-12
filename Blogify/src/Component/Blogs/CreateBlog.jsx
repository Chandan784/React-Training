import React from "react";

function CreateBlog() {
  return (
    <div className=" lg:px-96">
      <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
        <h1 className=" text-black text-2xl font-bold my-8">
          Create your Blog
        </h1>

        <label htmlFor="" className=" text-left w-full">
          Blog title
        </label>

        <input
          type="text"
          id=" "
          placeholder="Enter blog title"
          className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog Description
        </label>

        <input
          type="text"
          id=" "
          placeholder="Enter blog description"
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog image link
        </label>

        <input
          type="text"
          id=" "
          placeholder="Enter image link"
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog Category
        </label>

        <select
          name=""
          id=""
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        >
          <option value="">Chhose a category</option>
          <option value="">Education</option>
          <option value="">Coding</option>
          <option value="">Health</option>
          <option value="">Technology</option>
          <option value="">Business</option>
        </select>

        <button className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  ">
          Create Blog
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
