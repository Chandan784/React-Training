import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className=" w-full text-center h-screen flex justify-center items-center bg-slate-200">
      <div className=" h-screen bg-slate-200 w-3/4 flex  flex-col justify-center items-center flex-col-reverse lg:flex-row     ">
        <div className="left w-full lg:w-2/4  bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-20 h-4/5   ">
          <h1 className=" text-black text-2xl font-bold my-8">Contact us</h1>

          <label htmlFor="" className=" text-left w-full">
            Enter full name
          </label>

          <input
            type="text"
            id=" "
            className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Enter email
          </label>

          <input
            type="text"
            id=" "
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
          />
          <label htmlFor="" className=" w-full text-left">
            Enter phone
          </label>

          <input
            type="text"
            id=" "
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Enter your query
          </label>

          <textarea
            type="text"
            id=" "
            className="  h-72  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
          />

          <button className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  ">
            Conatct us
          </button>
        </div>

        <div className="right w-full lg:w-2/4  bg-red-800 flex justify-center items-center flex-col h-3/4">
          <h1 className=" text-white text-4xl  font-semibold ">
            Welcome to login
          </h1>

          <p className=" text-white text-lg my-4">dont't have account</p>

          <Link
            to="/signup"
            className=" text-white border-2 border-white rounded-xl px-4 p-2  font-semibold "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
