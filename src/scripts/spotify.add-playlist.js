import { addSongsToPlaylist } from "./spotify.add-playlist-songs";
import { getSpotifyUser } from "./spotify.get-user";

export const addPlaylist = async (name, songs, setLoggedStatus) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken || accessToken === "undefined") {
    setLoggedStatus(false)
    return {};
  }

  const userId = await getSpotifyUser();
  const baseURL = `https://api.spotify.com/v1/users/${userId}/playlists`;

  const url = new URL(baseURL);

  const payload = {
    method: "POST",
    body: JSON.stringify({
      name,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const request = await fetch(url, payload);
  const response = await request.json();
  if (response.error) {
    if (
      response.error.status === 401 ||
      response.error.message === "The access token expired"
    ) {
      localStorage.removeItem("access_token");
    }
    window.alert(
      `Error adding the playlist to spotify: ${JSON.stringify(response)}`
    );
  } else {
    await addSongsToPlaylist(response.id, songs);
  }
};
