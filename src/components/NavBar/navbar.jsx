import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-900 text-white">
        <Link to="/" className="title text-center p-5">
          People-Campus{" "}
        </Link>
      <ul className="flex  ">
      
        <li className="p-5 hover:bg-slate-700 hover:text-whit">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5 hover:bg-slate-700 hover:text-white ">
          <Link to="/service">Services</Link>{" "}
        </li><li className="p-5 hover:bg-slate-700 hover:text-whit">
          <Link to="/help">Help</Link>{" "}
        </li>
        <li className="p-5 hover:bg-slate-700 hover:text-whit">
          <Link to="/contact">Contact</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
