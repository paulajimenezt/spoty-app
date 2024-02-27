export const addSongsToPlaylist = async (playlistId, songs) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken || accessToken === "undefined") {
    console.log("Can't complete search: not logged in!");
    return {};
  }

  if (!songs?.length) {
    console.log("No songs to add");
    return;
  }

  const baseURL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

  const url = new URL(baseURL);
  const uris = songs.map((song) => song.uri);

  const payload = {
    method: "POST",
    body: JSON.stringify({
      uris: uris,
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
    console.error(
      `Error adding the playlist to spotify: ${JSON.stringify(response)}`
    );
  }
};
