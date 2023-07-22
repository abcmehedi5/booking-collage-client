import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Collage</Link>
            </li>
            <li>
              <Link to="classes">Admission</Link>
            </li>

            <li>
              <Link>My Collage</Link>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">
          <img
            className="w-10"
            src="https://i.ibb.co/r7d6nw8/logo.png"
            alt=""
          />
          Booking Collage
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collage">Collage</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>

          <li>
            <Link to="/my-collage">My Collage</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-14">
          <button className="btn btn-success">logout</button>
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full">
              <img src="https://i.ibb.co/r7d6nw8/logo.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;