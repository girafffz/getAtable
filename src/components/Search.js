import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Search = (props) => {
  const inputRef = useRef();
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();

  const currentUrl = window.location.href;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchInput(inputRef.current.value);

    // if search is done outside of restaurant listing page
    if (currentUrl !== `${loginCtx.usersUrl}/restaurant-listing`) {
      navigate("/users/restaurant-listing");
    } else {
      props.getRestaurants(inputRef.current.value);
    }
  };

  // make the input text stay through renders
  useEffect(() => {
    inputRef.current.value = props.searchInput;
  });

  return (
    <div className="container mx-auto bg-white px-24 py-6">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          ref={inputRef}
          type="search"
          id="search"
          className="form-control border rounded border-gray-300 w-full p-3"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-3 py-1.5 bg-lightBrown text-white font-medium text-md uppercase rounded shadow-md hover:bg-darkBrown transition duration-150"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
