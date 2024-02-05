import React from "react";
import PlayListView from "./playlist.presentation";

function PlayList(props) {
  return (
    <div>
      <PlayListView trackList={props.trackList} buttonFunction={props.buttonFunction} />
    </div>
  );
}

export default PlayList;
