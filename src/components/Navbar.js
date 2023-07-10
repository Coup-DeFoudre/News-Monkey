import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky sticky-top ">
      <div className="navbar px-4 py-2 bg-[#24272C] flex items-center justify-start space-x-10 text-white">
        <div className="logo max-w-fit">
          <h1 className="text-3xl font-bold">NewsMonkey</h1>
        </div>
        <div className="section flex list-none items-center space-x-4 ">
          <Link to="/">
            <li className="hover:scale-105 hover:font-semibold transition duration-200">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hover:scale-105 hover:font-semibold transition duration-200">
              About
            </li>
          </Link>

          <Link to="/Pricing">
            <li className="hover:scale-105 hover:font-semibold transition duration-200">
              Pricing
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
