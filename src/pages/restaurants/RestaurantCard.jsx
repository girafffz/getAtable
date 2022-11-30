import React from "react";

const RestaurantCard = () => {
  return (
    <>
      <div className=" max-w-xs rounded-lg overflow-hidden shadow-lg mb-8">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <h6 className="font-bold text-xl uppercase mb-2">Acqua e Farina</h6>

          <p className="text-orange-400 text-sm font-semibold">
            29 Reviews
            <span className="ml-2">42 Wishlisted</span>
          </p>
        </div>
        <div className="px-6">
          <p className="flex text-darkBrown mb-2">
            <span className="material-symbols-outlined mr-2">location_on</span>
            The Rail Mall
          </p>
          <p className="flex text-darkBrown">
            <span class="material-symbols-outlined mr-2">chair_alt</span>
            Seats Available: 50 / 200
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