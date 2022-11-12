import React from "react";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <header>
      <div className="container mx-auto">
        <img src={banner} alt="banner" className="object-scale-down h-200" />
      </div>
    </header>
  );
};

export default Banner;
