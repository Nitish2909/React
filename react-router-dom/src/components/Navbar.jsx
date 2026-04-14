import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-amber-500 py-5 ">
      <h2 className="text-3xl font-bold ml-4">My-Website</h2>
      <div className="flex gap-7 mr-4">
        <Link className="font-bold text-2xl" to="/">Home</Link>
        <Link className="font-bold text-2xl" to="/about">About</Link>
        <Link className="font-bold text-2xl" to="/contact">Contact</Link>
        <Link className="font-bold text-2xl" to="/product">Product</Link>
        <Link className="font-bold text-2xl" to="/fashion">Fashion</Link>
      </div>
    </div>
  );
};

export default Navbar;
