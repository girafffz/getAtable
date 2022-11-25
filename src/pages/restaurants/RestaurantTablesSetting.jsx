import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const RestaurantTablesSetting = () => {
  const [tableIsCreated, setTableIsCreated] = useState(false);
  const [tablesInRestaurant, setTablesInRestaurant] = useState();
  const [newTableData, setNewTableData] = useState(undefined); // store data for new table to be added to db
  const [tableNum, setTableNum] = useState(undefined);
  const [deletedTable, setDeleteTable] = useState(false);
  const [allTablesData, setAllTablesData] = useState(undefined); // store data for all tables retrieved from db
  const [maxCapacity, setMaxCapacity] = useState(0); // store max capacity data retrieved from db

  const { id } = useParams();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginCtx.isLogin) {
      navigate(
        `/restaurants/${loginCtx.personLogin.restaurant_id}/tables-setting`
      );
    }
  }, []);

  useEffect(() => {
    if (!loginCtx.isLogin) {
      navigate("/restaurants/login");
      loginCtx.setRestaurantSite(true);
    }
  }, []);

  // Create a new table
  useEffect(() => {
    const createNewTable = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/${id}/capacity`,
          {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newTableData),
          }
        );
        const newTable = await res.json();
        if (newTable.status === "create successful") {
          setTableIsCreated(true);
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    };
    createNewTable();
  }, [newTableData]);

  // Delete table
  useEffect(() => {
    if (tableNum !== undefined) {
      const deleteSelectedTable = async () => {
        try {
          const res = await fetch(
            `http://127.0.0.1:5000/api/restaurants/${id}/capacity`,
            {
              method: "DELETE",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(tableNum),
            }
          );
          const createdData = await res.json();
          if (createdData.status === "delete successful") {
            setDeleteTable(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      deleteSelectedTable();
    }
  }, [deletedTable]);

  // Retrieving data from database
  useEffect(() => {
    const getAllTablesCreated = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/${id}/capacity`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(),
          }
        );
        const allTablesCreated = await res.json();
        setAllTablesData(allTablesCreated.data.tables);
        setMaxCapacity(allTablesCreated.data.max_capacity);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTablesCreated();
  }, [tableIsCreated, deletedTable, id]);

  useEffect(() => {
    if (allTablesData !== undefined) {
      renderTablesCreated();
    }
  }, [allTablesData, tableIsCreated, deletedTable, id]);

  const renderTablesCreated = () => {
    const allTablesCreated = allTablesData.map((table, i) => {
      return (
        <div key={i}>
          <div className=" items-center mb-3 p-6 rounded-lg border border-gray-300 bg-white w-full md:flex">
            <div className="mt-2 md:flex md:w-2/3 md:space-x-2 md:mt-0">
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/4 py-1.5">
                {`Table Number: ${table.table_num}`}
              </h5>
              <h5 className="text-xl leading-tight font-medium md:px-3 md:w-1/4 py-1.5">
                {`Table Capacity: ${table.table_capacity}`}
              </h5>
            </div>
            <div className="space-x-2 mt-2 md:flex md:w-1/3 md:justify-end md:mt-0">
              {/* <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                View
              </button>
              <button className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150">
                Edit
              </button> */}
              <button
                id={`${table.table_num}`}
                onClick={handleDeleteClick}
                className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    setTablesInRestaurant(allTablesCreated);
  };

  // adding react-hook-forms functionality
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setNewTableData(data);
    setTableIsCreated(false);
  };

  // when either view, edit or delete button is clicked
  const getTableNum = (e) => {
    setTableNum({
      table_num: e.target.id,
    });
  };

  // when delete button is clicked
  const handleDeleteClick = (e) => {
    getTableNum(e);
    setDeleteTable(true);
  };

  const onError = (errors) => console.log(errors);
  return (
    <>
      <div className="container mx-auto mt-10 px-24 md:flex">
        <h1 className="text-3xl">Add Table</h1>
      </div>
      <div className="container justify-evenly mx-auto mt-10 px-24 mb-10 md:flex">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-group space-y-2 md:space-x-2 md:2/3">
            <label htmlFor="table_capacity">Table for</label>
            <select
              id="table-capacity"
              className="form-select w-full appearance-none px-3 py-1.5 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:border-darkBrown md:w-48"
              {...register("table_capacity", {
                required: {
                  value: true,
                  message: "Table capacity is required",
                },
              })}
            >
              <option value="" className="appearance-none">
                Table Capacity
              </option>
              <option value="2">2 pax</option>
              <option value="4">4 pax</option>
              <option value="6">6 pax</option>
              <option value="8">8 pax</option>
              <option value="10">10 pax</option>
            </select>
            <input
              type="text"
              name=""
              id="table-num"
              placeholder="Table Number"
              className="form-control w-full px-3 py-1.5 border border-solid border-gray-300 rounded focus:ring-darkBrown md:w-48"
              {...register("table_num", {
                required: {
                  value: true,
                  message: "Table number is required",
                },
              })}
            />
            <button
              type="submit"
              className="mt-10 mb-10 px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="container mx-auto mt-10 px-24 md:flex">
        <h1 className="text-3xl">Existing Tables</h1>
      </div>
      <div className="container mx-auto mt-5 px-24 md:flex">
        <h3 className="text-xl">{`Maximum Capacity: ${maxCapacity}`}</h3>
      </div>
      <div className="container mx-auto mt-10 px-24">{tablesInRestaurant}</div>
    </>
  );
};

export default RestaurantTablesSetting;
