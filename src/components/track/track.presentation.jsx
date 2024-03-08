import React from "react";
import styles from "./track.module.scss";

function TrackView(props) {
  const title = props.track.title;
  const index = props.index;
  const artist = props.track.artist;
  const album = props.track.album;
  const image = props.track.image;
  const buttonFunction = props.buttonFunction;
  return (
    <div
      className={styles.trackContainer}
      onClick={() => buttonFunction(props.track)}
    >
      <div className={styles.imageContainer}>
        {image && (
          <img
            className={styles.image}
            src={image}
            alt={`album cover for ${title} from ${artist}`}
          />
        )}
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.index}>
          <p>{index}</p>
        </div>
        <div className={`${styles.title} ${styles.animated}`}>
          <span> {title}</span>
        </div>
        <div className={`${styles.artist} ${styles.animated}`}>
          <span>{artist}</span>
        </div>
        <div className={`${styles.album} ${styles.animated}`}>
          <span>{album}</span>
        </div>
      </div>
    </div>
  );
}

export default TrackView;
