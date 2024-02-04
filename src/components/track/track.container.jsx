import React from "react";
import TrackView from "./track.presentation";

function Track(props) {
  return <TrackView track={props.trackObject} addSong={props.addSong} />;
}

export default Track;
