import React from "react";
import PlayListView from "./playlist.presentation";

function PlayList(props) {
  const handlePlaylistNameChange = (event) => {
    props.setPlayListName(event.target.value);
  };
  return (
    <PlayListView
      playlistName={props.playListName}
      trackList={props.trackList}
      buttonFunction={props.buttonFunction}
      createPlayList={props.createPlayList}
      handlePlaylistNameChange={handlePlaylistNameChange}
    />
  );
}

export default PlayList;
