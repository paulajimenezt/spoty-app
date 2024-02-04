import React from "react";
import PlayListView from "./playlist.presentation";

function PlayList(props) {
  return (
    <div>
      <PlayListView playSongs={props.playSongs} />
    </div>
  );
}

export default PlayList;
