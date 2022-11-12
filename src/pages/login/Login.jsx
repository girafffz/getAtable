import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
            type="text"
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

export default Login;
