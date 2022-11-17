import React, { useContext } from "react";
import Banner from "../../components/Banner";
import LoginContext from "../../context/LoginContext";

const RestaurantsLanding = () => {
  const loginCtx = useContext(LoginContext);
  const currentUrl = window.location.href;

  console.log("restaurant landing accountType", loginCtx.AccountType);
  console.log("restaurant landing isLogin", loginCtx.isLogin);
  console.log("restaurant landing restaurantSite", loginCtx.restaurantSite);

  if (currentUrl === loginCtx.restaurantUrl) {
    if (!loginCtx.restaurantSite) {
      loginCtx.setRestaurantSite(true);
    }
  }

  console.log(loginCtx.restaurantSite);

  return (
    <>
      <Banner />
    </>
  );
};

export default RestaurantsLanding;
