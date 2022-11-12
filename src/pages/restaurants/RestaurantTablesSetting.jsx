import React from "react";
import { useForm } from "react-hook-form";

const RestaurantTablesSetting = () => {
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
        {/* ---- SEATING CAPACITY ---- */}
        <div className="form-group">
          <label htmlFor="max_capacity" className="form-label">
            Restaurant Maximum Seating Capacity
          </label>
          <input
            type="text"
            name=""
            id="max_capacity"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("max_capacity", {
              required: {
                value: true,
                message:
                  "Please enter maximum seating capacity of the restaurant",
              },
            })}
          />
          {errors.max_capacity && (
            <p className=" text-red-600 mb-4">{errors.max_capacity.message}</p>
          )}
          <label htmlFor="table_for_2" className="form-label">
            Total number of Tables for 2 Pax
          </label>
          <input
            type="text"
            name=""
            id="table_for_2"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("table_for_2")}
          />
          <label htmlFor="table_for_4" className="form-label">
            Total number of Tables for 4 Pax
          </label>
          <input
            type="text"
            name=""
            id="table_for_4"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("table_for_4")}
          />
          <label htmlFor="table_for_6" className="form-label">
            Total number of Tables for 6 Pax
          </label>
          <input
            type="text"
            name=""
            id="table_for_6"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("table_for_6")}
          />
          <label htmlFor="table_for_8" className="form-label">
            Total number of Tables for 8 Pax
          </label>
          <input
            type="text"
            name=""
            id="table_for_8"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("table_for_8")}
          />
          <label htmlFor="table_for_10" className="form-label">
            Total number of Tables for 10 Pax
          </label>
          <input
            type="text"
            name=""
            id="table_for_10"
            className="form-control w-full mt-2 mb-4 px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded focus:ring-darkBrown"
            {...register("table_for_10")}
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

export default RestaurantTablesSetting;
