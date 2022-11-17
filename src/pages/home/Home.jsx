import React, { useContext } from "react";
import Search from "../../components/Search";
import Banner from "../../components/Banner";
import LoginContext from "../../context/LoginContext";

const Home = (props) => {
  const loginCtx = useContext(LoginContext);
  console.log("home props", props);
  console.log("home AccountType", loginCtx.AccountType);

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
