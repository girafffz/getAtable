import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
// import UsersLanding from "./pages/users/UsersLanding";
import UserRegister from "./pages/register/UserRegister";
import UserLogin from "./pages/login/Login";
import UserDetails from "./pages/users/UserDetails";
import RestaurantsLanding from "./pages/restaurants/RestaurantsLanding";
import RestaurantRegister from "./pages/register/RestaurantRegister";
import RestaurantLogin from "./pages/login/Login";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import RestaurantSeatsManagement from "./pages/restaurants/RestaurantSeatsManagement";
import RestaurantStaffManagement from "./pages/restaurants/RestaurantStaffManagement";
import RestaurantTablesSetting from "./pages/restaurants/RestaurantTablesSetting";
import Footer from "./components/Footer";

function App() {
  //  STATES  //
  const [accountType, setAccountType] = useState("restaurant");
  return (
    <>
      <BrowserRouter>
        <NavBar accountType={accountType} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/register" element={<UserRegister />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users" element={<Home />} />
          <Route path="/users/:id/account" element={<UserDetails />} />
          {/* <Route path="/users/:id/favourites" element={<UserFavourites />} /> */}
          {/* <Route path="/users/:id/history" element={<UserHistory />} /> */}
          {/* <Route path="/users/:id/reviews" element={<UserReviews />} /> */}
          <Route path="/restaurants" element={<RestaurantsLanding />} />
          <Route
            path="/restaurants/register"
            element={<RestaurantRegister />}
          />
          <Route path="/restaurants/login" element={<RestaurantLogin />} />
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
    </>
  );
}

export default App;
