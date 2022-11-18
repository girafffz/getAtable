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
    <>
      <div className="container mx-auto text-center mt-10 px-24">
        <h1 className="text-3xl font-semibold">{`Restaurant Account Details`}</h1>
        <br />
        <p className="text-xl">Under Construction</p>
        <br />
        <p>This page will contains all the RestaurantDetails's details</p>
      </div>
    </>
  );
};

export default RestaurantDetails;
