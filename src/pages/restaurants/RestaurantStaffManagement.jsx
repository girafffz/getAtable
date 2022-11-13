import React from "react";
import { useForm } from "react-hook-form";

const RestaurantStaffManagement = () => {
  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
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
              type="text"
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
              type="text"
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
            <select
              id="resign"
              className="form-select w-full appearance-none px-3 py-1.5 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:border-darkBrown md:w-32"
              {...register("resign")}
            >
              <option value="">Resign?</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
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
        <div key="id1">
          <div className=" items-center mb-3 p-6 rounded-lg border border-gray-300 bg-white w-full md:flex">
            <div className="mt-2 md:flex md:w-2/3 md:space-x-2 md:mt-0">
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-3/5 py-1.5">
                Name: Stephanie Luo
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/5 py-1.5">
                Role: Manager
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/5 py-1.5">
                Status: Current
              </h5>
            </div>
            <div className="space-x-2 mt-2 md:flex md:w-1/3 md:justify-end md:mt-0">
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                View
              </button>
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                Edit
              </button>
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div key="id2">
          <div className=" items-center mb-3 p-6 rounded-lg border border-gray-300 bg-white w-full md:flex">
            <div className="mt-2 md:flex md:w-2/3 md:space-x-2 md:mt-0">
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-3/5 py-1.5">
                Name: Stephanie Luo
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/5 py-1.5">
                Role: Manager
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/5 py-1.5">
                Status: Current
              </h5>
            </div>
            <div className="space-x-2 mt-2 md:flex md:w-1/3 md:justify-end md:mt-0">
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                View
              </button>
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                Edit
              </button>
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantStaffManagement;
