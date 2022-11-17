import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";
import banner from "../images/banner.png";
import restaurantBanner from "../images/restaurant.png";

const Banner = () => {
  const loginCtx = useContext(LoginContext);

  return (
    <header>
      <div className="container mx-auto">
        <img
          src={loginCtx.restaurantSite ? restaurantBanner : banner}
          alt="banner"
          className="object-scale-down h-200"
        />
      </div>
    </header>
  );
};

export default Banner;
