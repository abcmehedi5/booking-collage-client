import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCollege from "../../../Hooks/useCollage";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setSearch(searchData);
    // navigate("/collage");
  };
  const [colleges] = useCollege(search);
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

        <Link to="/" className="btn btn-ghost uppercase text-xl u">
          <img
            className="w-10"
            src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
            alt=""
          />
          Booking Collage
        </Link>
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

          {user && (
            <li>
              <Link to="/my-college">My Collage</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="input input-bordered w-2/4 max-w-xs"
        />

        <button className="btn btn-primary mr-10 ml-3 " onClick={handleSearch}>
          Search
        </button>

        {user && (
          <div className="flex gap-14">
            <Link to="/profile">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
