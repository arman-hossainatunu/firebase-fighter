import React from "react";
import MyLink from "./MyLink";
import MyContainer from "./MyContainer";
import { Link } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/about">About</MyLink>
      </li>
      <li>
        <MyLink to="/profile">Profile</MyLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <MyContainer>
        <div className="navbar">
          {/* 🔹 Left Side - Logo */}
          <div className="navbar-start">
            <Link to={'/'} className="normal-case text-xl font-bold text-primary">
              CodeFiy
            </Link>
          </div>

          {/* 🔹 Center - Menu */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
          </div>

          {/* 🔹 Right Side - Signin Button */}
          <div className="navbar-end">
            <a className="btn btn-primary text-white">Signin</a>
          </div>

          {/* 🔹 Dropdown for mobile */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
