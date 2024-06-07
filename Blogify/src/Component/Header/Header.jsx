import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar  h-20 bg-blue-800 text-white flex justify-between items-center text-xl font-medium p-4  ">
        <div className="left">
          <h1>Blogify</h1>
        </div>

        <div
          className="medium flex
    gap-2  font-medium"
        >
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <Link>Create Blog</Link>
        </div>

        <div className="right flex gap-2">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link>Logout</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
