import React from "react";
import styles from "./playlist.module.scss";
import TrackList from "../tracklist/tracklist.container";

function PlayListView(props) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <input className={styles.input}></input>
      </div>
      <TrackList songList={props.playSongs} />
    </div>
  );
}

export default PlayListView;
