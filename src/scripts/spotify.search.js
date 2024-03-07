export const searchSong = async (query) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken || accessToken === "undefined") {
    window.alert("Can't complete search: not logged in!");
    return {};
  }

  const baseURL = "https://api.spotify.com/v1/search";
  const queryParams = {
    q: `${query}`,
    type: "track",
  };

  const url = new URL(baseURL);
  url.search = new URLSearchParams(queryParams).toString();

  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const body = await fetch(url, payload);
  const response = await body.json();
  if (response.error) {
    if (
      response.error.status === 401 ||
      response.error.message === "The access token expired"
    ) {
      localStorage.removeItem("access_token");
    }
    window.alert(
      `Error searching the song in spotify: ${JSON.stringify(response)}`
    );
  } else {
    if (response?.tracks?.items?.length) {
      const mappedResponse = response.tracks.items.map((track) => {
        return {
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          image: track.album.images[1].url,
          uri: track.uri,
        };
      });
      return mappedResponse || [];
    }
    return [];
  }
};
