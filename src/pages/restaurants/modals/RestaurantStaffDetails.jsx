import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const RestaurantStaffDetails = (props) => {
  const [updatedStaffData, setUpdatedStaffData] = useState(undefined);
  // const [toUpdateRecords, setToUpdateRecords] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  console.log(props);

  useEffect(() => {
    if (!props.editStaff) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [props.staffId, props.editStaff]);

  // Update staff data in database
  useEffect(() => {
    if (updatedStaffData !== undefined) {
      const updateStaffRecord = async () => {
        console.log(`update staff record START`);
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/restaurants/${id}/staff/update`,
            {
              method: "PATCH",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(updatedStaffData),
            }
          );
          const createdData = await res.json();
          console.log(createdData);
          console.log(createdData.status);
          if (createdData.status === "update successful") {
            props.setDataBaseIsUpdated(true);
            props.setToUpdateRecords(false); // reset state
          }
          console.log(`update staff record END`);
        } catch (error) {
          console.log(error);
        }
      };
      updateStaffRecord();
    }
  }, [props.editStaff, updatedStaffData]);

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUpdatedStaffData(data);
    props.setDataBaseIsUpdated(false); // reset state
    props.setToUpdateRecords(false); // reset state
    console.log("updated data log", data);
  };

  const onError = (errors) => console.log(errors);

  if (props.singleStaffData !== undefined) {
    const fields = [
      "id",
      "username",
      "name",
      "last_name",
      "email",
      "role",
      "resigned",
    ];
    fields.forEach((field) => setValue(field, props.singleStaffData[field]));
  }

  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="staffDetails"
      tabIndex="-1"
      aria-labelledby="staffDetails"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800">
              Staff Details
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body m-5 px-24">
            {/* ---- FORM ---- */}
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="id">STAFF ID</label>
                <input
                  type="text"
                  name=""
                  id="id"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  disabled
                  {...register("id", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  name=""
                  id="username"
                  placeholder="Username"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("username", {
                    required: {
                      value: true,
                      message:
                        "Username is required and should be no more than 50 characters",
                    },
                  })}
                />
              </div>
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="First Name"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
              </div>
              <div className="form-group mb-3  space-y-3">
                <label htmlFor="last_name">LAST NAME</label>
                <input
                  type="text"
                  name=""
                  id="last_name"
                  placeholder="Last Name"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("last_name", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                />
              </div>
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
              </div>
              {/* <input
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
                /> */}
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="role">ROLE</label>
                <select
                  id="role"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("role")}
                >
                  <option value="">Role</option>
                  <option value="staff">Staff</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              <div className="form-group mb-3 space-y-3">
                <label htmlFor="resigned">Has Resigned?</label>
                <select
                  id="resigned"
                  className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded"
                  onChange={() => {
                    setUpdatedStaffData(undefined);
                  }}
                  disabled={isDisabled}
                  {...register("resigned")}
                >
                  <option value="">Resigned?</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
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
              <div className="flex flex-shrink-0 flex-wrap items-center justify-end mt-5">
                <button
                  type="submit"
                  className={`${
                    !props.editStaff
                      ? "hidden"
                      : "inline-block px-6 py-2.5 bg-lightBrown text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-darkBrown hover:shadow-lg transition duration-150 ease-in-out ml-1"
                  }`}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className={`${
                props.editStaff
                  ? "hidden"
                  : "inline-block px-6 py-2.5 bg-lightBrown text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-darkBrown hover:shadow-lg transition duration-150 ease-in-out ml-1"
              }`}
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantStaffDetails;
