import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../images/logo.png";

const NavBar = (props) => {
  return (
    <nav className="sticky top-0 container mx-auto">
      {/* ---- FOR GETTING TO RESTAURANTS LANDING PAGE ---- */}
      <div className="flex justify-end mx-auto bg-lightBrown opacity-80 px-24 py-3">
        <Link to="/restaurants">
          <div>For Restaurants</div>
        </Link>
      </div>

      {/* ---- LOGO, REGISTER AND LOGIN BUTTONS ---- */}
      <div className="flex items-center justify-between bg-white px-24 py-3">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 py-3 md:w-40" />
          </Link>
        </div>
        <div className="login-and-register space-x-6">
          <Link to="/users/register">Register</Link>
          <Link to="/users/login">Login</Link>
        </div>
      </div>
      <hr></hr>

      {/* ---- USERS MENU BUTTONS ---- */}
      <div
        className={`${
          props.accountType === "user"
            ? "usersMenu hidden gap-12 justify-center px-24 bg-lightBrown opacity-80 md:flex"
            : "hidden"
        }`}
      >
        <NavLink
          to="/users/:id/account"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          My Account
        </NavLink>
        <NavLink
          to="/users/:id/favourites"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          My Favourites
        </NavLink>
        <NavLink
          to="/users/:id/history"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          My Dining History
        </NavLink>
        <NavLink
          to="/users/:id/reviews"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          My Reviews
        </NavLink>
      </div>

      {/* ---- RESTAURANT MENU BUTTONS ---- */}
      <div
        className={`${
          props.accountType === "restaurant"
            ? "usersMenu hidden gap-12 justify-center px-24 bg-lightBrown md:flex"
            : "hidden"
        }`}
      >
        <NavLink
          to="/restaurants/:id/account"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          Account
        </NavLink>
        <NavLink
          to="/restaurants/:id/seats"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          Seats Management
        </NavLink>
        <NavLink
          to="/restaurants/:id/staff"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          Staff Management
        </NavLink>
        <NavLink
          to="/restaurants/:id/reviews"
          className="text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
        >
          Reviews
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
