import React from "react";
import TrackView from "./track.presentation";

function Track(props) {
  return (
    <TrackView
      index={props.index}
      track={props.trackObject}
      buttonFunction={props.buttonFunction}
      symbol={props.symbol}
    />
  );
}

export default Track;
