import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/photographer.jpg"
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-orange-400">Welcome to SHUTTER</h1>
          <p className="mb-5 text-justify">Shutter photography is a very popular website. Wheater you are capturing memories of a special event or anything, SHUTTER photography can help you to create stunning images.</p>
          <Link to='/services' className="btn bg-gray-50 text-black hover:bg-orange-400"><HiOutlineShoppingCart className="text-lg mr-2"/>Browse Services</Link>
          <Link to='/blog' className="ml-5 hover:underline">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
