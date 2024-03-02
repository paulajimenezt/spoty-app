import React from "react";
import styles from "./playlist.module.scss";
import TrackList from "../tracklist/tracklist.container";
import Button from "../button/button.presentation";

function PlayListView(props) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <input
          type="text"
          minLength= '1'
          maxLength='50'
          value={props.playListName}
          onChange={props.handlePlaylistNameChange}
          className={styles.input}
        ></input>
      </div>
      <TrackList
        trackList={props.trackList}
        symbol={props.symbol}
        buttonFunction={props.buttonFunction}
      />
      <Button
        text="Add Playlist"
        buttonStyle="loginButton"
        onClick={props.createPlayList}
      />
    </div>
  );
}

export default PlayListView;
