import React from "react";
import styles from "./track.module.scss";

function TrackView(props) {
  const title = props.track.title;
  const artist = props.track.artist;
  const album = props.track.album;
  const addSong = props.addSong;
  return (
    <div className={styles.trackContainer}>
      <div>
        <p className={styles.info}> {title}</p>
        <p className={styles.info}>
          {" "}
          {artist}| {album}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={() => addSong(props.track)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TrackView;
