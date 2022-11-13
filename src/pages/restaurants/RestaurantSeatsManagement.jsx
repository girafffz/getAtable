import React, { useState } from "react";

const RestaurantSeatsManagement = () => {
  const [tableIsOccupied, setTableIsOccupied] = useState(false);
  const [tableData, setTableData] = useState({
    table_num: "",
    occupied: false,
  });

  const data = [
    {
      table_num: 1,
      table_capacity: 2,
      occupied: false,
    },
    {
      table_num: 2,
      table_capacity: 2,
      occupied: false,
    },
    {
      table_num: 3,
      table_capacity: 2,
      occupied: true,
    },
    {
      table_num: 4,
      table_capacity: 4,
      occupied: true,
    },
  ];

  // when table is occupied, occupied button will show, clicking it will change the table status to available (occupied = false)
  const handleOccupiedClick = (e) => {
    setTableData({
      table_num: e.target.id,
      occupied: false,
    });
    setTableIsOccupied(false);
  };

  // when table is available, available button will show, clicking it will change the table status to occupied (occupied = true)
  const handleAvailableClick = (e) => {
    setTableData({
      table_num: e.target.id,
      occupied: true,
    });
    setTableIsOccupied(true);
  };

  const tablesInRestaurant = data.map((table) => {
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
            table.occupied ? "flex justify-center w=1/3" : "hidden"
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
            !table.occupied ? "flex justify-center w=1/3" : "hidden"
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

  console.log(tableData);
  console.log(tableIsOccupied);

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
