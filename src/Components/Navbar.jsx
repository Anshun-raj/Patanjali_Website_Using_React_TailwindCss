import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#186c38] p-3">
      <div className="max-w-[1240px]  items-center flex justify-between  mx-auto">
        <div className="text-3xl font-bold">
          <a href="/home">
            <img
              src="https://www.patanjaliayurved.net/media/images/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex font-bold text-2xl cursor-pointer text-white gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-center text-white fixed bg-black cursor-pointer left-0 top-[73px] 
              ${toggle ? "left-[0]" : "left-[-100%]"}
             `}
        >
          <li className="py-[30px] text-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="py-[30px] text-bold">
            <Link to="/about">About</Link>
          </li>

          <li className="py-[30px] text-bold">
            <Link to="/product">Product</Link>
          </li>
          <li className="py-[30px] text-bold">
            <Link to="/review">Review</Link>
          </li>
          <li className="py-[30px] text-bold">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
