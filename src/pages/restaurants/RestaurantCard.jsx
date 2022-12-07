import React from "react";

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <>
      <div
        id={`${props.restaurant_id}`}
        className=" max-w-xs w-80 rounded-lg overflow-hidden shadow-lg mb-8"
      >
        <img
          className="w-full hidden"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <h6 className="font-bold text-xl uppercase truncate mb-2">{`${props.restaurant_name}`}</h6>

          <p className="text-orange-400 text-sm font-semibold">
            {`${Math.floor(Math.random() * 585)} Reviews`}
            <span className="ml-2">{`${Math.floor(
              Math.random() * 484
            )} Wishlisted`}</span>
          </p>
        </div>
        <div className="px-6">
          <p className="flex text-darkBrown mb-2">
            <span className="material-symbols-outlined mr-2">location_on</span>
            {`${props.restaurant_location}`}
          </p>
          <p className="flex text-darkBrown">
            <span className="material-symbols-outlined mr-2">chair_alt</span>
            {`Seats Available: ${props.restaurant_seatsAvailable} / ${props.restaurant_maxCapacity}`}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-lightBrown rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
