import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className=" bg-amber-900   lg:bg-slate-950  md:bg-green-800 sm:bg-red-800 h-20  flex justify-between items-center text-xl text-5xl text-red-700 font-extrabold border-blue-950 border-10  grid grid-cols-4 ">
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/service">service </Link>
      <Link to="contact">contact </Link>
    </div>
  );
}

export default Header;
