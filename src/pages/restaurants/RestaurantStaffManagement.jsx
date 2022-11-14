import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const RestaurantStaffManagement = () => {
  const [allStaffData, setAllStaffData] = useState(undefined); // store data returned from db
  const [allRestaurantStaff, setAllRestaurantStaff] = useState(); // to store staff cards
  const [databaseIsUpdated, setDataBaseIsUpdated] = useState(false);
  const [newStaffIsAdded, setNewStaffIsAdded] = useState(false);
  const [newStaffData, setNewStaffData] = useState(undefined); // store data of newly added staff on submit

  const { id } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  // Create new staff data in database
  useEffect(() => {
    if (newStaffData !== undefined) {
      const createStaffRecord = async () => {
        console.log(`create staff record START`);
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/restaurants/${id}/staff/create`,
            {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(newStaffData),
            }
          );
          const createdData = await res.json();
          console.log(createdData);
          console.log(createdData.status);
          if (createdData.status === "create successful") {
            setDataBaseIsUpdated(true);
          }
          console.log(`create staff record END`);
        } catch (error) {
          console.log(error);
        }
      };
      createStaffRecord();
    }
  }, [newStaffIsAdded, newStaffData]);

  // Retrieving data from database
  useEffect(() => {
    const getAllRestaurantStaff = async () => {
      console.log(`get restaurant staff START`);
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/${id}/staff`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(),
          }
        );
        const restaurantStaffData = await res.json();
        setAllStaffData(restaurantStaffData.data.restaurant_staff);
        console.log(`get restaurant staff END`);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRestaurantStaff();
  }, [newStaffIsAdded, newStaffData, databaseIsUpdated]);

  // Rendering data from database
  useEffect(() => {
    if (allStaffData !== undefined) {
      renderStaff();
    }
  }, [allStaffData, newStaffIsAdded, newStaffData, databaseIsUpdated]);

  useEffect(() => {
    reset({
      username: "",
      name: "",
      last_name: "",
      email: "",
      password: "",
      role: "",
    });
  }, [databaseIsUpdated]);

  const renderStaff = () => {
    const allStaff = allStaffData.map((staff) => {
      return (
        <div key={`${staff.id}`}>
          <div className=" items-center mb-3 p-6 rounded-lg border border-gray-300 bg-white w-full md:flex">
            <div className="mt-2 md:flex md:w-3/4 md:space-x-2 md:mt-0">
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/6 py-1.5">
                {`ID: ${staff.id}`}
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/3 py-1.5">
                {`${
                  capitalizeFirstLetter(staff.name) +
                  " " +
                  capitalizeFirstLetter(staff.last_name)
                }`}
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/6 py-1.5">
                {`${capitalizeFirstLetter(staff.role)}`}
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/3 py-1.5">
                {`${staff.resigned ? "Resigned" : "Current Employee"}`}
              </h5>
            </div>
            <div className="space-x-2 mt-2 md:flex md:w-1/4 md:justify-end md:mt-0">
              <button
                id={`${staff.id}`}
                className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
              >
                View
              </button>
              <button
                id={`${staff.id}`}
                className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
              >
                Edit
              </button>
              <button
                id={`${staff.id}`}
                className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    setAllRestaurantStaff(allStaff);
  };

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setNewStaffData(data);
    setNewStaffIsAdded(true);
    console.log(data);
  };

  const onError = (errors) => console.log(errors);

  return (
    <>
      <div className="container mx-auto mt-10 px-24 md:flex">
        <h1 className="text-3xl">Add Staff</h1>
      </div>
      <div className="container justify-evenly mx-auto mt-10 px-24 md:flex">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-group space-y-2 md:space-x-2">
            <input
              type="text"
              name=""
              id="username"
              placeholder="Username"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              onChange={() => {
                setNewStaffIsAdded(false);
                setNewStaffData(undefined);
                setDataBaseIsUpdated(false);
              }}
              {...register("username", {
                required: {
                  value: true,
                  message:
                    "Username is required and should be no more than 50 characters",
                },
              })}
            />
            <input
              type="text"
              name=""
              id="name"
              placeholder="First Name"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <input
              type="text"
              name=""
              id="last_name"
              placeholder="Last Name"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
            />
            <input
              type="email"
              name=""
              id="email"
              placeholder="email"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <select
              id="role"
              className="form-select w-full appearance-none px-3 py-1.5 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:border-darkBrown md:w-32"
              {...register("role")}
            >
              <option value="">Role</option>
              <option value="staff">Staff</option>
              <option value="manager">Manager</option>
            </select>
            {/* <select
              id="resigned"
              className="form-select w-full appearance-none px-3 py-1.5 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:border-darkBrown md:w-32"
              {...register("resigned")}
            >
              <option value="">Resign?</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select> */}
          </div>
          {errors.username && (
            <p className="mt-2 text-red-600">{errors.username.message}</p>
          )}
          {errors.name && (
            <p className="mt-2 text-red-600">{errors.name.message}</p>
          )}
          {errors.last_name && (
            <p className="mt-2 text-red-600">{errors.last_name.message}</p>
          )}
          {errors.email && (
            <p className="mt-2 text-red-600">{errors.email.message}</p>
          )}
          {errors.password && (
            <p className="mt-2 text-red-600">{errors.password.message}</p>
          )}
          {errors.role && (
            <p className="mt-2 text-red-600">{errors.role.message}</p>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-10 mb-10 px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="container mx-auto mt-10 px-24 md:flex">
        <h1 className="text-3xl">Staff Records</h1>
      </div>
      <div className="container mx-auto mt-10 px-24">
        {/* ---- Staff Card ---- */}
        {allRestaurantStaff}
      </div>
    </>
  );
};

export default RestaurantStaffManagement;
