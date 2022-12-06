import React, { useState } from "react";
import { useEffect } from "react";
import Search from "../../components/Search";
import RestaurantCard from "./RestaurantCard";

const RestaurantListing = (props) => {
  ////////////////////// STATES ////////////////////
  const [searchResults, setSearchResults] = useState(undefined);
  const [capacityResults, setCapacityResults] = useState(undefined);
  const [fullRestaurantsInfo, setFullRestaurantsInfo] = useState(undefined);
  const [restaurantCards, setRestaurantCards] = useState();

  ////////////////////// useEffect ////////////////////
  // fetch all data for restaurants based on search input
  // if no search input, data for first 12 restaurants will be fetched
  useEffect(() => {
    getRestaurants(props.searchInput);
  }, []);

  // combine different sets of data for each restaurant
  useEffect(() => {
    if ((searchResults !== undefined) & (capacityResults !== undefined)) {
      gatherRestaurantsInfo();
    }
  }, [searchResults, capacityResults]);

  // render card for each restaurant
  useEffect(() => {
    if (fullRestaurantsInfo !== undefined) {
      renderRestaurantCards();
    }
  }, [fullRestaurantsInfo]);

  //////////////////// FUNCTIONS ///////////////////
  const getRestaurants = async (input) => {
    let capacityOfEachRestaurant = [];

    try {
      // getting basic restaurant info based on search results
      const res = await fetch(`http://127.0.0.1:5000/api/restaurants`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ searchInput: input }),
      });
      const restaurantsData = await res.json();
      setSearchResults(restaurantsData.data.restaurants);

      // getting capacity data for each restaurant based on search results
      for (let i = 0; i < restaurantsData.total_results; i++) {
        const res = await fetch(
          `http://127.0.0.1:5000/api/restaurants/capacity`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              id: `${restaurantsData.data.restaurants[i].id}`,
            }),
          }
        );
        const restaurantCapacity = await res.json();
        capacityOfEachRestaurant.push(restaurantCapacity.data);
        if (restaurantsData.total_results === capacityOfEachRestaurant.length) {
          setCapacityResults(capacityOfEachRestaurant);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gatherRestaurantsInfo = () => {
    let restaurantsArray = [];

    for (let i = 0; i < searchResults.length; i++) {
      for (let j = 0; j < capacityResults.length; j++) {
        if (i === j) {
          restaurantsArray.push({
            restaurant_id: searchResults[i].id,
            restaurant_name: searchResults[i].name,
            restaurant_building: searchResults[i].restaurant_building_name,
            restaurant_location: searchResults[i].location_id,
            restaurant_maxCapacity: capacityResults[j].max_capacity,
            restaurant_seatsAvailable: capacityResults[j].seats_available,
          });
        }
      }
    }
    setFullRestaurantsInfo(restaurantsArray);
  };

  const renderRestaurantCards = () => {
    const cards = fullRestaurantsInfo.map((restaurant, i) => {
      return (
        <RestaurantCard
          key={i}
          restaurant_id={restaurant.restaurant_id}
          restaurant_name={restaurant.restaurant_name}
          restaurant_location={restaurant.restaurant_location}
          restaurant_building={restaurant.restaurant_building_name}
          restaurant_seatsAvailable={restaurant.restaurant_seatsAvailable}
          restaurant_maxCapacity={restaurant.restaurant_maxCapacity}
        />
      );
    });
    setRestaurantCards(cards);
  };

  return (
    <>
      <Search
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
        getRestaurants={getRestaurants}
      />
      <div className="container mx-auto px-24">
        <h4 className="text-3xl font-medium uppercase mt-28">
          Results for{" "}
          <span className="text-3xl text-orange-600">{`${props.searchInput}`}</span>
        </h4>
        <br></br>
        <div className="flex flex-wrap justify-between">{restaurantCards}</div>
      </div>
    </>
  );
};

export default RestaurantListing;
