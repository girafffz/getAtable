import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const RestaurantRegister = () => {
  const [newRestaurantData, setNewRestaurantData] = useState(undefined);
  const [newManagerData, setNewManagerData] = useState(undefined);
  const [newRestaurantCreated, setNewRestaurantCreated] = useState(false);
  const navigate = useNavigate();
  const loginCtx = useContext(LoginContext);

  useEffect(() => {
    const createRestaurant = async () => {
      if (newRestaurantData !== undefined) {
        try {
          const res = await fetch(`http://127.0.0.1:5000/api/restaurants`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newRestaurantData),
          });
          const newRestaurant = await res.json();

          if (newRestaurant.status === "create successful") {
            const managerDataWithRestaurantId = {
              ...newManagerData,
              id: newRestaurant.data.restaurant.id,
            };

            setNewManagerData(managerDataWithRestaurantId);
            setNewRestaurantCreated(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    createRestaurant();
  }, [newRestaurantData]);

  useEffect(() => {
    const createFirstManagerAccount = async () => {
      if (newRestaurantCreated) {
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/restaurants/first-manager`,
            {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(newManagerData),
            }
          );

          const newManager = await res.json();
          if (newManager.status === "create successful") {
            loginCtx.setRestaurantSite(true);
            navigate("/restaurants/login");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    createFirstManagerAccount();
  }, [newRestaurantCreated]);

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setNewRestaurantData({
      name: data.restaurant_name,
      address_line_1: data.address_line_1,
      address_line_2: data.address_line_2,
      country: data.country,
      postal_code: data.postal_code,
      website: data.website,
      tel: data.tel,
    });
    setNewManagerData({
      username: data.username,
      name: data.name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      role: "manager",
    });
  };

  const onError = (errors) => console.log(errors);
  return (
    <div className="container mx-auto mt-10 px-24 md:px-60 md:w-5/6">
      <h1 className="text-3xl font-semibold text-center justify-center mb-4">
        Welcome!
      </h1>
      <p className="text-center justify-center mb-12">
        Create your free account
      </p>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h2 className="text-2xl mb-4">Manager Info</h2>
        {/* ---- MANAGER USERNAME ---- */}
        <div className="form-group">
          <label htmlFor="managerUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            name=""
            id="managerUsername"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("username", {
              required: {
                value: true,
                message:
                  "Username is required and should be no more than 50 characters",
              },
            })}
          />
          {errors.username && (
            <p className=" text-red-600 mb-4">{errors.username.message}</p>
          )}
        </div>
        {/* ---- MANAGER NAME ---- */}
        <div className="form-group">
          <label htmlFor="managerName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name=""
            id="managerName"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          {errors.name && (
            <p className=" text-red-600 mb-4">{errors.name.message}</p>
          )}
        </div>
        {/* ---- MANAGER LAST NAME ---- */}
        <div className="form-group">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name=""
            id="last_name"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("last_name", {
              required: {
                value: true,
                message: "Last name is required",
              },
            })}
          />
          {errors.last_name && (
            <p className=" text-red-600 mb-4">{errors.last_name.message}</p>
          )}
        </div>
        {/* ---- MANAGER EMAIL ---- */}
        <div className="form-group">
          <label htmlFor="managerEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            name=""
            id="managerEmail"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email && (
            <p className=" text-red-600 mb-4">{errors.email.message}</p>
          )}
        </div>
        {/* ---- MANAGER PASSWORD ---- */}
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
                message: "Password is required",
              },
            })}
          />
          {errors.password && (
            <p className=" text-red-600 mb-4">{errors.password.message}</p>
          )}
        </div>
        <br></br>
        <h2 className="text-2xl mb-4">Restaurant Info</h2>
        {/* ---- NAME OF RESTAURANT ---- */}
        <div className="form-group">
          <label htmlFor="restaurantName" className="form-label">
            Name of Restaurant
          </label>
          <input
            type="text"
            name=""
            id="restaurantName"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("restaurant_name", {
              required: {
                value: true,
                message: "Please enter name of the restaurant",
              },
            })}
          />
          {errors.restaurant_name && (
            <p className=" text-red-600 mb-4">
              {errors.restaurant_name.message}
            </p>
          )}
        </div>
        {/* ---- ADDRESS ---- */}
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name=""
            id="address"
            placeholder="Street"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("address_line_1", {
              required: {
                value: true,
                message: "Please enter address",
              },
            })}
          />
          {errors.address_line_1 && (
            <p className=" text-red-600 mb-4">
              {errors.address_line_1.message}
            </p>
          )}
          <input
            type="text"
            name=""
            id="address"
            placeholder="Unit number and Name of Building"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("address_line_2")}
          />
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name=""
            id="country"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("country")}
          />
          <label htmlFor="postal_code" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            name=""
            id="postal_code"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("postal_code", {
              required: {
                value: true,
                message: "Please enter 6-digit postal code",
              },
            })}
          />
          {errors.postal_code && (
            <p className=" text-red-600 mb-4">{errors.postal_code.message}</p>
          )}
        </div>
        {/* ---- CONTACT INFORMATION ---- */}
        <div className="form-group">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            type="text"
            name=""
            id="website"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("website")}
          />
          <label htmlFor="tel" className="form-label">
            Restaurant Hotline
          </label>
          <input
            type="text"
            name=""
            id="tel"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("tel")}
          />
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

export default RestaurantRegister;
