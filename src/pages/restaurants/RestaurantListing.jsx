import React, { useState } from "react";
import Search from "../../components/Search";
import RestaurantCard from "./RestaurantCard";

const RestaurantListing = (props) => {
  //   const [searchInput, setSearchInput] = useState("");
  //   const [isRestaurantListingPage, setIsRestaurantListingPage] = useState(true);
  console.log("restaurant listing props", props);

  const getRestaurants = (searchInput) => {
    console.log(`fetch api`);
    console.log(searchInput);
  };

  // how to use search params?

  return (
    <>
      <Search
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
        getRestaurants={getRestaurants}
      />
      <div className="container mx-auto px-24">
        <h4 className="text-3xl mt-28">Your search results:</h4>
        <br></br>

        <div class="flex flex-wrap justify-between">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default RestaurantListing;
