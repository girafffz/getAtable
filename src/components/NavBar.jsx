import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

import logo from "../images/logo.png";

const NavBar = (props) => {
  const [showRestaurantNavMenu, setShowRestaurantNavMenu] = useState(false);
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  const goRestaurantSite = () => {
    loginCtx.setRestaurantSite(true);
    navigate("/restaurants");
  };

  const showNavMenu = () => {
    if (loginCtx.restaurant) {
      if (loginCtx.isLogin) {
        setShowRestaurantNavMenu(true);
      }
    }
  };

  // const showNavMenu = () => {

  // }
  return (
    <nav className="sticky top-0 container mx-auto">
      {/* ---- FOR GETTING TO RESTAURANTS LANDING PAGE ---- */}
      <div
        className="flex justify-end mx-auto w-full bg-darkBrown text-white border-2 border-b-lightBrown
       px-24 py-2"
      >
        <Link to="/restaurants" onClick={() => goRestaurantSite()}>
          <div>For Restaurants</div>
        </Link>
      </div>

      {/* ---- LOGO, REGISTER AND LOGIN BUTTONS ---- */}
      <div className="flex items-center bg-white px-24 py-3">
        <div className="logo w-1/2">
          <Link
            to={`${
              props.accountType === "restaurant"
                ? "/restaurants"
                : props.accountType === "user"
                ? "/users"
                : "/"
            }`}
          >
            <img src={logo} alt="logo" className="w-20 py-3 md:w-40" />
          </Link>
        </div>
        <div className="login-and-register flex w-1/2 justify-end space-x-2 md:space-x-6">
          <Link
            to={`${
              props.accountType === "restaurant"
                ? "/restaurants/register"
                : "/users/register"
            }`}
          >
            Register
          </Link>
          <Link
            to={`${
              props.accountType === "restaurant"
                ? "/restaurants/login"
                : "/users/login"
            }`}
          >
            Login
          </Link>
          <Link
            to="/users/restaurant-listing"
            className={`${
              props.accountType === "restaurant" ? "hidden" : "block"
            }`}
          >
            Search
          </Link>
        </div>
      </div>
      <hr className="bg-white"></hr>

      {/* ---- USERS MENU BUTTONS ---- */}
      <div
        className={`${
          props.accountType === "user"
            ? "hidden gap-12 justify-center px-24 bg-lightBrown md:flex"
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
          loginCtx.isLogin && loginCtx.accountType === "restaurant"
            ? "hidden gap-12 justify-center px-24 bg-lightBrown md:flex"
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
          to="/restaurants/:id/tables-setting"
          className={`${
            loginCtx.isLogin && loginCtx.personLogin?.role === "manager"
              ? "text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
              : "hidden"
          }`}
        >
          Tables Setting
        </NavLink>
        <NavLink
          to="/restaurants/:id/staff"
          className={`${
            loginCtx.isLogin && loginCtx.personLogin?.role === "manager"
              ? "text-lg font-medium hover:text-white hover:bg-darkBrown p-3"
              : "hidden"
          }`}
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
