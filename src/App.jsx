import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header.container";
import Searchbar from "./components/searchbar/searchbar.container";
import Button from "./components/button/button.presentation";
import SearchResults from "./components/searchresults/searchresults.container";
import PlayList from "./components/playlist/playlist.container";
import { checkAccessToken } from "./scripts/spotify.check-access-token";
import { searchSong } from "./scripts/spotify.search";

function App() {
  useEffect(() => {
    checkAccessToken();
  }, []);

  const [searchListTracks, setSearchListTracks] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);
  const [searchbarText, setSearchbarText] = useState("");

  const addPlaylistSong = (song) => {
    setPlayListTracks([...playListTracks, song]);
  };

  const removePlaylistSong = (song) => {
    const songIndex = playListTracks.findIndex(
      (track) =>
        track.title === song.title &&
        track.artist === song.artist &&
        track.album === song.album
    );
    const updatedPlaySongs = [...playListTracks];
    updatedPlaySongs.splice(songIndex, 1);
    setPlayListTracks(updatedPlaySongs);
  };

  const fetchResults = (query) => {
    searchSong(query)
      .then((response) => {
        setSearchListTracks(response);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error setting searchListTracks:", error);
      });
  };

  return (
    <div className={styles.App}>
      <Header />
      <Searchbar
        searchbarText={searchbarText}
        setSearchbarText={setSearchbarText}
      />
      <Button
        text="Search"
        style="defaultButton"
        onClick={fetchResults}
        buttonParameter={searchbarText}
      />
      <div className={styles.trackLists}>
        <SearchResults
          trackList={searchListTracks}
          buttonFunction={addPlaylistSong}
        />
        <PlayList
          trackList={playListTracks}
          buttonFunction={removePlaylistSong}
        />
      </div>
    </div>
  );
}

export default App;
