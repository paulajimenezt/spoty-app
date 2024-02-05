import React from "react";
import SearchResultsView from "./searchresults.presentation";

function SearchResults(props) {
  return (
    <SearchResultsView
      trackList={props.trackList}
      buttonFunction={props.buttonFunction}
    />
  );
}

export default SearchResults;
