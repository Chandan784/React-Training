import React from "react";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" h-screen bg-slate-500 w-full flex  flex-col justify-center items-center flex-col-reverse lg:flex-row ">
      <div className="left w-full lg:w-2/4 h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
        <h1 className=" text-black text-2xl font-bold my-8">Sign In</h1>

        <label htmlFor="" className=" text-left w-full">
          Username
        </label>

        <input
          type="text"
          id=" "
          className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Password
        </label>

        <input
          type="text"
          id=" "
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <button className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  ">
          Sign In
        </button>

        <p className=" font-bold">Forgot Password</p>
      </div>

      <div className="right w-full lg:w-2/4 h-screen bg-red-800 flex justify-center items-center flex-col">
        <h1 className=" text-white text-4xl  font-semibold ">
          Welcome to login
        </h1>

        <p className=" text-white text-lg my-4">dont't have account</p>

        <Link className=" text-white border-2 border-white rounded-xl px-4 p-2  font-semibold ">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
