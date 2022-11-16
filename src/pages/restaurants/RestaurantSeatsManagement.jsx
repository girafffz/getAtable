import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const RestaurantSeatsManagement = () => {
  const [tablesInRestaurant, setTablesInRestaurant] = useState();
  const [tableIsOccupied, setTableIsOccupied] = useState(false);
  const [tableData, setTableData] = useState(undefined);
  const [tableStatus, setTableStatus] = useState(undefined);

  const { id } = useParams();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  console.log(id);
  console.log(loginCtx.personLogin);

  useEffect(() => {
    if (loginCtx.isLogin) {
      navigate(`/restaurants/${loginCtx.personLogin.restaurant_id}/seats`);
    }
  }, []);

  useEffect(() => {
    if (!loginCtx.isLogin) {
      navigate("/restaurants/login");
    }
  }, []);

  // Updating data in database
  useEffect(() => {
    const updateRestaurantCapacity = async () => {
      console.log(`update restaurant capacity START`);
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/${id}/capacity`,
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(tableStatus),
          }
        );
        const updatedData = await res.json();
        console.log(updatedData);
        console.log(`update restaurant capacity END`);
      } catch (error) {
        console.log(error);
      }
    };
    updateRestaurantCapacity();
  }, [tableIsOccupied, tableStatus]);

  // Retrieving data from database
  useEffect(() => {
    const getRestaurantCapacity = async () => {
      console.log(`get restaurant capacity START`);
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/${id}/capacity`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(),
          }
        );
        const capacityData = await res.json();
        setTableData(capacityData.data.tables);
        console.log(`get restaurant capacity END`);
      } catch (error) {
        console.log(error);
      }
    };
    getRestaurantCapacity();
  }, [tableIsOccupied, tableStatus, id]);

  // Rendering data from database
  useEffect(() => {
    if (tableData !== undefined) {
      renderTables();
    }
  }, [tableData, tableStatus, tableIsOccupied]);

  // TODO: calculate current capacity

  // when table is occupied, occupied button will show, clicking it will change the table status to available (occupied = false)
  const handleOccupiedClick = (e) => {
    setTableStatus({
      table_num: e.target.id,
      table_occupied: false,
    });
    setTableIsOccupied(false);
  };

  // when table is available, available button will show, clicking it will change the table status to occupied (occupied = true)
  const handleAvailableClick = (e) => {
    setTableStatus({
      table_num: e.target.id,
      table_occupied: true,
    });
    setTableIsOccupied(true);
  };

  const renderTables = () => {
    // mapping data retrieved from the database to render the tables
    const tables = tableData.map((table) => {
      return (
        <div
          key={table.table_num}
          className="flex-block w-44 h-40 border rounded-xl border-darkBrown space-y-3 p-3 m-5"
        >
          <div className="flex justify-center w=1/3">
            <p className="border rounded-md border-gray-300 w-full px-3 py-1.5 text-center font-semibold">
              {`Table No. ${table.table_num}`}
            </p>
          </div>
          <div className="flex justify-center w=1/3">
            <p className="p-1.5 text-center">{`${table.table_capacity} pax`}</p>
          </div>
          <div
            className={`${
              table.table_occupied ? "flex justify-center w=1/3" : "hidden"
            }`}
          >
            <button
              id={`${table.table_num}`}
              className="px-3 py-1.5 bg-darkBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-lightBrown transition duration-150"
              onClick={handleOccupiedClick}
            >
              Occupied
            </button>
          </div>
          <div
            className={`${
              !table.table_occupied ? "flex justify-center w=1/3" : "hidden"
            }`}
          >
            <button
              id={`${table.table_num}`}
              className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
              onClick={handleAvailableClick}
            >
              Available
            </button>
          </div>
        </div>
      );
    });
    setTablesInRestaurant(tables);
  };

  return (
    <div className="container mx-auto mt-10 px-24">
      <div className="inline-flex flex-wrap justify-center mb-10 w-full">
        <h1 className="text-3xl">Current Capacity: 200</h1>
      </div>
      <div className="inline-flex flex-wrap justify-center w-full">
        {tablesInRestaurant}
      </div>
    </div>
  );
};

export default RestaurantSeatsManagement;
