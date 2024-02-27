export const getSpotifyUser = async () => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken || accessToken === "undefined") {
    window.alert("Not logged in!");
    return null;
  }

  const baseURL = "https://api.spotify.com/v1/me";
  const url = new URL(baseURL);

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
    return null;
  } else {
    return response.id;
  }
};
