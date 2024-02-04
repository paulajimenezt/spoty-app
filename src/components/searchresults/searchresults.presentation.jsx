import React from "react";
import styles from "./searchresults.module.scss";
import TrackList from "../tracklist/tracklist.container";

function SearchResultsView(props) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Results</h1>
      </div>
      <TrackList songList={props.songList} addSong={props.addSong} />
    </div>
  );
}

export default SearchResultsView;
