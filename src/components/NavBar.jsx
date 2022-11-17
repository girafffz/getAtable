import React, { useContext } from "react";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import LoginContext from "../context/LoginContext";

import logo from "../images/logo.png";
import restaurantLogo from "../images/restaurantLogo.png";

const NavBar = () => {
  const loginCtx = useContext(LoginContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const goRestaurantSite = () => {
    loginCtx.setRestaurantSite(true);

    if (loginCtx.accountType === "user") {
      loginCtx.setIsLogin(false);
      loginCtx.setPersonLogin(undefined);
      loginCtx.setAccountType("");
    }
  };

  // clicking logo resets everything (which acts like a form of logout)
  const handleLogoClick = () => {
    loginCtx.setRestaurantSite(false);
    loginCtx.isLogin(false);
    loginCtx.setPersonLogin(undefined);
    loginCtx.setAccountType("");
  };

  return (
    <nav className="sticky top-0 container mx-auto">
      {/* ---- FOR GETTING TO RESTAURANTS LANDING PAGE ---- */}
      <div
        className="flex justify-end mx-auto w-full bg-darkBrown text-white border-2 border-b-lightBrown
       px-24 py-2"
      >
        <Link to="/restaurants" onClick={() => goRestaurantSite()}>
          <div className=" hover:underline">For Restaurant Site</div>
        </Link>
      </div>

      {/* ---- LOGO, REGISTER AND LOGIN BUTTONS ---- */}
      <div className="flex items-center bg-white px-24 py-3">
        <div className="logo w-1/2">
          <Link to="/" onClick={() => handleLogoClick()}>
            <img
              src={loginCtx.restaurantSite ? restaurantLogo : logo}
              alt="logo"
              className="w-20 py-3 md:w-40"
            />
          </Link>
        </div>
        <div
          className={`${
            loginCtx.isLogin
              ? "hidden"
              : "login-and-register flex w-1/2 justify-end space-x-2 md:space-x-6"
          }`}
        >
          <Link
            to={`${
              loginCtx.restaurantSite
                ? "/restaurants/register"
                : "/users/register"
            }`}
          >
            Register
          </Link>
          <Link
            to={`${
              loginCtx.restaurantSite ? "/restaurants/login" : "/users/login"
            }`}
          >
            Login
          </Link>
          <Link
            to="/users/restaurant-listing"
            className={`${loginCtx.restaurantSite ? "hidden" : "block"}`}
          >
            Search
          </Link>
        </div>
        <div
          className={`${
            loginCtx.isLogin
              ? "text-xl flex w-1/2 justify-end space-x-2 md:space-x-6"
              : "hidden"
          }`}
        >
          {`Welcome, ${loginCtx.personLogin?.name} ${
            loginCtx.personLogin?.role ? loginCtx.personLogin?.role : ""
          }`}
        </div>
      </div>
      <hr className="bg-white"></hr>

      {/* ---- USERS MENU BUTTONS ---- */}
      <div
        className={`${
          loginCtx.isLogin && loginCtx.accountType === "user"
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
