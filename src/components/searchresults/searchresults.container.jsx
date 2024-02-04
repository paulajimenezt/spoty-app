import React from "react";
import SearchResultsView from "./searchresults.presentation";

function SearchResults(props) {
  return (
    <SearchResultsView songList={props.songList} addSong={props.addSong} />
  );
}

export default SearchResults;
