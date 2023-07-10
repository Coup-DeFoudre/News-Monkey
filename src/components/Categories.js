import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="">
      <div className="text-white font-semibold text-2xl m-5">
        <h1>Top-Categories</h1>
        <div className=" flex flex-wrap justify-start space-x-4 space-y-4 text-[#a8a5a5] font-medium">
          <div></div>
          <Link className="focus-within:text-white" to="/general">
            <li className="">General</li>
          </Link>
          <Link className="focus-within:text-white" to="/business">
            <li className="">Business</li>
          </Link>
          <Link className="focus-within:text-white" to="/entertainment">
            <li className="">Entertainment</li>
          </Link>

          <Link className="focus-within:text-white" to="/health">
            <li className="">Health</li>
          </Link>
          <Link className="focus-within:text-white" to="/science">
            <li className="">Science</li>
          </Link>
          <Link className="focus-within:text-white" to="/sports">
            <li className="">Sports</li>
          </Link>
          <Link className="focus-within:text-white" to="/technology">
            <li className="">Technology</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
