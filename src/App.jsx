import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header.container";
import Searchbar from "./components/searchbar/searchbar.container";
import Button from "./components/button/button.presentation";
import SearchResults from "./components/searchresults/searchresults.container";
import PlayList from "./components/playlist/playlist.container";
import LoadingOverlay from "./components/loading/loading-overlay.presentation";
import Login from "./components/login-screen/login-screen.presentation";
import { checkAccessToken } from "./scripts/spotify.check-access-token";
import { searchSong } from "./scripts/spotify.search";
import { addPlaylist } from "./scripts/spotify.add-playlist";

function App() {
  const [searchListTracks, setSearchListTracks] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);
  const [playListName, setPlayListName] = useState([]);
  const [searchbarText, setSearchbarText] = useState("");
  let [isLoggedIn, setisLoggedIn] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkAccessToken(setisLoggedIn)
  }, [isLoggedIn]);

  const addPlaylistSong = (song) => {
    setPlayListTracks([...playListTracks, song]);
  };

  const removePlaylistSong = (song) => {
    const songIndex = playListTracks.findIndex(
      (track) =>
        track.title === song.title &&
        track.artist === song.artist &&
        track.album === song.album &&
        track.uri === song.uri
    );
    const updatedPlaySongs = [...playListTracks];
    updatedPlaySongs.splice(songIndex, 1);
    setPlayListTracks(updatedPlaySongs);
  };

  const createPlayList = () => {
    if (!playListName) {
      window.alert("Playlist name must be filled");
      return [];
    }
    setIsLoading(true);
    addPlaylist(playListName, playListTracks, setisLoggedIn)
      .then((response) => {
        if (response) {
          window.alert("Playlist created succesfully");
        }
      })
      .catch((error) => {
        console.error("Error setting searchListTracks:", error);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchResults = () => {
    if (!searchbarText) {
      window.alert("Enter search query");
      return [];
    }
    setIsLoading(true);
    searchSong(searchbarText, setisLoggedIn)
      .then((response) => {
        if (response?.length) {
          setSearchListTracks(response);
        } else {
          console.log("Empty response");
        }
      })
      .catch((error) => {
        window.alert("Error setting searchListTracks:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.App}>
      {/* <ColorPicker /> */}
      <Header />
      {!isLoggedIn && <Login />}
      {isLoading && <LoadingOverlay />}
      <Searchbar
        searchbarText={searchbarText}
        setSearchbarText={setSearchbarText}
      />
      <Button
        text="Search"
        buttonStyle="defaultButton"
        onClick={fetchResults}
      />
      <div className={styles.trackLists}>
        <SearchResults
          trackList={searchListTracks}
          buttonFunction={addPlaylistSong}
        />
        <PlayList
          playListName={playListName}
          setPlayListName={setPlayListName}
          createPlayList={createPlayList}
          trackList={playListTracks}
          buttonFunction={removePlaylistSong}
        />
      </div>
    </div>
  );
}

export default App;
