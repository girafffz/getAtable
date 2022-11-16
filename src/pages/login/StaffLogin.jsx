import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const StaffLogin = () => {
  const [startLogin, setStartLogin] = useState(false);
  const [loginData, setLoginData] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");

  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  console.log("Before login", loginCtx.isLogin);

  const currentUrl = window.location.href;
  // console.log(currentUrl);
  // console.log(`${loginCtx.restaurantsUrl}/login`);

  useEffect(() => {
    if (
      currentUrl === `${loginCtx.restaurantsUrl}/login` &&
      loginData !== undefined
    ) {
      const staffLogin = async () => {
        // console.log(`login process START`);
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/restaurants/staff/login`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                email: loginData.email,
                password: loginData.password,
              }),
            }
          );
          const accountInfo = await res.json();
          loginCtx.setPersonLogin(accountInfo.data);
          setErrorMessage(accountInfo.message);
          if (accountInfo.status === "successful") {
            loginCtx.setIsLogin(true);
            loginCtx.setAccountType("restaurant");
          }

          // console.log(`login process END`);
          // console.log("After login", loginCtx.isLogin);
          if (accountInfo.data.role === "manager") {
            navigate(`/restaurants/${accountInfo.data.restaurant_id}/staff`);
          } else {
            navigate(`/restaurants/${accountInfo.data.restaurant_id}/seats`);
          }

          console.log("Data returned from db:", accountInfo.data);
          console.log("Status returned from db:", accountInfo.status);
          console.log("Data in personLogin state:", loginCtx.personLogin);
        } catch (error) {
          console.log(error);
        }
      };
      staffLogin();
    }
  }, [startLogin, loginData]);

  console.log(`before form`);

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoginData(data);
    setStartLogin(true);
    console.log(data);
  };

  const onError = (errors) => console.log(errors);
  return (
    <div className="container mx-auto justify-center mt-10 px-24 md:px-60 md:w-3/5">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* ---- EMAIL ---- */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name=""
            id="email"
            onChange={() => setStartLogin(false)}
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter email",
              },
            })}
          />
        </div>
        {/* ---- PASSWORD ---- */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("password", {
              required: {
                value: true,
                message: "Please enter password",
              },
            })}
          />
          {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
          {JSON.stringify(loginCtx.personLogin)}
        </div>
        <button
          type="submit"
          className="mt-5 mb-16 px-6 py-2.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StaffLogin;
