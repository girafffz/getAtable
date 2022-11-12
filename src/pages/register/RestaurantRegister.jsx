import React from "react";
import { useForm } from "react-hook-form";

const RestaurantRegister = (props) => {
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
    <div className="flex container mx-auto mt-10 px-24 md:px-60 md:w-5/6">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
            {...register("name", {
              required: {
                value: true,
                message: "Please enter name of the restaurant",
              },
            })}
          />
          {errors.name && (
            <p className=" text-red-600 mb-4">{errors.name.message}</p>
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
            Contact Number
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
