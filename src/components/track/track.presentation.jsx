import React from "react";
import styles from "./track.module.scss";

function TrackView(props) {
  const title = props.track.title;
  const artist = props.track.artist;
  const album = props.track.album;
  const buttonFunction = props.buttonFunction;
  return (
    <div className={styles.trackContainer}>
      <div>
        <img/>
        <p className={styles.info}> {title}</p>
        <p className={styles.info}>
          {" "}
          {artist}  |  {album}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={() => buttonFunction(props.track)}
        >
          {props.symbol === true? "+": "-"}
        </button>
      </div>
    </div>
  );
}

export default TrackView;
