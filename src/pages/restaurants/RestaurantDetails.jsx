import React, { useState, useEffect, useContext } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const RestaurantDetails = () => {
  const { id } = useParams();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginCtx.isLogin) {
      navigate(`/restaurants/${loginCtx.personLogin.restaurant_id}/account`);
    }
  }, []);

  useEffect(() => {
    if (!loginCtx.isLogin) {
      navigate("/restaurants/login");
      loginCtx.setRestaurantSite(true);
    }
  }, []);
  return (
    <div className="container mx-auto mt-10 px-24">Restaurant Details</div>
  );
};

export default RestaurantDetails;
