import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import UsersLanding from "./pages/users/UsersLanding";
import UserDetails from "./pages/users/UserDetails";
import RestaurantsLanding from "./pages/restaurants/RestaurantsLanding";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersLanding />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/restaurants" element={<RestaurantsLanding />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
