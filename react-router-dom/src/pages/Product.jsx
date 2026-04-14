import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 py-5">
        <Link className="text-2xl font-bold" to="/product/men">Men's</Link>
        <Link className="text-2xl font-bold" to="/product/women">Women's</Link>
        <Link className="text-2xl font-bold" to="/product/kid">Kid's</Link>
      </div>
      <div className="flex items-center justify-center text-5xl font-bold mt-8 underline">
        <Outlet/>
      </div>
    </div>
  );
};

export default Product;
