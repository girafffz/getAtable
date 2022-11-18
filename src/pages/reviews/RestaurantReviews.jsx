import React, { useState, useEffect, useContext } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const RestaurantReviews = () => {
  const { id } = useParams();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginCtx.isLogin) {
      navigate(`/restaurants/${loginCtx.personLogin.id}/reviews`);
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
        <h1 className="text-3xl font-semibold">{`Restaurant Reviews`}</h1>
        <br />
        <p className="text-xl">Under Construction</p>
        <br />
        <p>
          This page will contains all the reviews written by the user for this
          restaurant
        </p>
      </div>
    </>
  );
};

export default RestaurantReviews;
