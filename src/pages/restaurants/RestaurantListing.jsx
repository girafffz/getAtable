import React, { useState } from "react";
import Search from "../../components/Search";

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
        <div>Your search results:</div>
        <br></br>
        ============================
        <div>Restaurant Name: Ramen Shiba</div>
        <div>
          Address: 154 West Coast Road #B1-09 West Coast Plaza Singapore 127371
        </div>
        <div>Current capacity: 12 / 50</div>
        ============================
      </div>
    </>
  );
};

export default RestaurantListing;
