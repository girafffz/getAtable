import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import UserLogin from "./pages/login/UserLogin";

import StaffLogin from "./pages/login/StaffLogin";
// import UsersLanding from "./pages/users/UsersLanding";
import UserRegister from "./pages/register/UserRegister";
import UserDetails from "./pages/users/UserDetails";
import RestaurantListing from "./pages/restaurants/RestaurantListing";
import RestaurantsLanding from "./pages/restaurants/RestaurantsLanding";
import RestaurantRegister from "./pages/register/RestaurantRegister";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import RestaurantSeatsManagement from "./pages/restaurants/RestaurantSeatsManagement";
import RestaurantStaffManagement from "./pages/restaurants/RestaurantStaffManagement";
import RestaurantTablesSetting from "./pages/restaurants/RestaurantTablesSetting";
import Footer from "./components/Footer";

import LoginContext from "./context/LoginContext";

function App() {
  //  STATES  //
  const [isLogin, setIsLogin] = useState(false);
  const [personLogin, setPersonLogin] = useState(undefined);
  const [restaurantsUrl, setRestaurantsUrl] = useState(
    "http://localhost:3000/restaurants"
  );
  const [usersUrl, setUsersUrl] = useState("http://localhost:3000/users");
  const [restaurantSite, setRestaurantSite] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <LoginContext.Provider
        value={{
          isLogin,
          setIsLogin,
          personLogin,
          setPersonLogin,
          restaurantsUrl,
          setRestaurantsUrl,
          usersUrl,
          setUsersUrl,
          accountType,
          setAccountType,
          restaurantSite,
          setRestaurantSite,
        }}
      >
        <BrowserRouter>
          <NavBar accountType={accountType} setAccountType={setAccountType} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              }
            />
            <Route
              path="/users/restaurant-listing"
              element=<RestaurantListing
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            />
            <Route path="/users/login" element={<UserLogin />} />
            <Route path="/users/register" element={<UserRegister />} />
            <Route path="/users/:id/account" element={<UserDetails />} />
            <Route
              path="/users/:id"
              element={
                <Home
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              }
            />
            {/* <Route path="/users/:id/favourites" element={<UserFavourites />} /> */}
            {/* <Route path="/users/:id/history" element={<UserHistory />} /> */}
            {/* <Route path="/users/:id/reviews" element={<UserReviews />} /> */}
            <Route path="/restaurants" element={<RestaurantsLanding />} />
            <Route
              path="/restaurants/register"
              element={<RestaurantRegister />}
            />
            <Route path="/restaurants/login" element={<StaffLogin />} />
            <Route
              path="/restaurants/:id/account"
              element={<RestaurantDetails />}
            />
            <Route
              path="/restaurants/:id/staff"
              element={<RestaurantStaffManagement />}
            />
            {/* <Route
            path="/restaurants/:id/reviews"
            element={<RestaurantReviews />}
          /> */}
            <Route
              path="/restaurants/:id/seats"
              element={<RestaurantSeatsManagement />}
            />
            <Route
              path="/restaurants/:id/tables-setting"
              element={<RestaurantTablesSetting />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
