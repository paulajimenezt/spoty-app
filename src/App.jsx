import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header.container";
import Searchbar from "./components/searchbar/searchbar.container";
import Button from "./components/button/button.presentation";
import SearchResults from "./components/searchresults/searchresults.container";
import PlayList from "./components/playlist/playlist.container";
import { checkAccessToken } from "./scripts/spotify.check-access-token";

function App() {
  useEffect(() => {
    checkAccessToken();
  }, []);

  const [searchListTracks, setSearchListTracks] = useState([
    { title: "hola", artist: "Luis", album: "Versión-1" },
    { title: "Paula Sol", artist: "Paula", album: "Versioón-2" },
    { title: "La Mariposa", artist: "Pajaro", album: "El Arbol" },
  ]);
  const [playListTracks, setPlayListTracks] = useState([
    { title: "La Mariposa", artist: "Pajaro", album: "El Arbol" },
  ]);

  const addPlaylistSong = (song) => {
    setPlayListTracks([...playListTracks, song]);
  };

  const removePlaylistSong = (song) => {
    const songIndex = playListTracks.findIndex( track => track.title === song.title && track.artist === song.artist && track.album === song.album);
    const updatedPlaySongs = [...playListTracks];
    updatedPlaySongs.splice(songIndex, 1);
    setPlayListTracks(updatedPlaySongs);
  };

  return (
    <div className={styles.App}>
      <Header />
      <Searchbar />
      <Button text="Search" style="defaultButton" />
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
