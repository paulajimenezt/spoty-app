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

  const [searchSongs, setSearchSongs] = useState([
    { title: "hola", artist: "Luis", album: "Versión-1" },
    { title: "Paula Sol", artist: "Paula", album: "Versioón-2" },
    { title: "La Mariposa", artist: "Pajaro", album: "El Arbol" },
  ]);
  const [playSongs, setPlaySongs] = useState([
    { title: "La Mariposa", artist: "Pajaro", album: "El Arbol" },
  ]);

  const addPlaySong = (song) => {
    setPlaySongs([...playSongs, song]);
  };

  return (
    <div className={styles.App}>
      <Header />
      <Searchbar />
      <Button text="Search" style="defaultButton" />
      <div className={styles.trackLists}>
        <SearchResults songList={searchSongs} addSong={addPlaySong} />
        <PlayList playSongs={playSongs} />
      </div>
    </div>
  );
}

export default App;
