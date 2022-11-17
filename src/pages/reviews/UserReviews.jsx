import React, { useState, useEffect, useContext } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const UserReviews = () => {
  const { id } = useParams();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginCtx.isLogin) {
      navigate(`/users/${loginCtx.personLogin.id}/reviews`);
    }
  }, []);

  useEffect(() => {
    if (!loginCtx.isLogin) {
      navigate("/users/login");
      loginCtx.setRestaurantSite(false);
    }
  }, []);

  return (
    <>
      <div className="container mx-auto text-center mt-10 px-24">
        <h1 className="text-3xl font-semibold">{`${loginCtx.personLogin.name} ${loginCtx.personLogin.last_name} Favourites`}</h1>
        <br />
        <p className="text-xl">Under Construction</p>
        <br />
        <p>This page will contains all the reviews written by the user</p>
      </div>
    </>
  );
};

export default UserReviews;
