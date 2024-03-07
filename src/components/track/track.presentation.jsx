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
    <div className={styles.trackContainer}>
      <div onClick={() => buttonFunction(props.track)}>
        {image && (
          <img
            className={styles.image}
            src={image}
            alt={`album cover for ${title} from ${artist}`}
          />
        )}
        <p className={styles.index}>{index}</p>
        <p className={styles.info}> {title}</p>
        <p className={styles.info}>
          <i>{artist}</i> | {album}
        </p>
      </div>
    </div>
  );
}

export default TrackView;
