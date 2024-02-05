import React from "react";
import styles from "./searchresults.module.scss";
import TrackList from "../tracklist/tracklist.container";

function SearchResultsView(props) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Results</h1>
      </div>
      <TrackList
        trackList={props.trackList}
        symbol={true}
        buttonFunction={props.buttonFunction}
      />
    </div>
  );
}

export default SearchResultsView;
