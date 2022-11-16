import React from "react";
import Search from "../../components/Search";
import Banner from "../../components/Banner";

const Home = (props) => {
  console.log("home props", props);
  return (
    <>
      <Search
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      <Banner />
    </>
  );
};

export default Home;
