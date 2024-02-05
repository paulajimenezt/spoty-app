import React from "react";
import SearchbarView from "./searchbar.presentation";

function Searchbar(props) {
  const handleInputChange = (event) => {
    props.setSearchbarText(event.target.value);
  };
  return (
    <SearchbarView
      searchbarText={props.searchbarText}
      handleInputChange={handleInputChange}
    />
  );
}

export default Searchbar;
