import React from "react";
import { v4 as uuidv4 } from "uuid";
import Track from "../track/track.container";
import styles from "./tracklist.module.scss";

function TrackListView(props) {
  const songList = props.trackList || [];
  return (
    <div className={styles.tracklistContainer}>
      {songList.map((song, i) => (
        <Track
          key={song.title + "_song_" + uuidv4()}
          trackObject={song}
          buttonFunction={props.buttonFunction}
          symbol={props.symbol}
        />
      ))}
    </div>
  );
}

export default TrackListView;
