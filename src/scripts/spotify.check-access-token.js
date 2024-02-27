import { getSpotifyUser } from "./spotify.get-user";

export const checkAccessToken = async () => {
  const codeVerifier = localStorage.getItem("code_verifier");
  const accessToken = localStorage.getItem("access_token");

  if (accessToken && accessToken !== "undefined") {
    const userId = getSpotifyUser();
    if (userId) {
      console.log("Logged in!");
      return;
    } else {
      console.log("Not logged in :(");
    }
  }

  const clientId = "eb2e6d0e839643f0abd983569aee9aea";
  const redirectUri = "https://spoty-app.netlify.app/";
  const requestUrl = "https://accounts.spotify.com/api/token";

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(requestUrl, payload);
  const response = await body.json();
  if (response.error) {
    console.error(
      `Error getting access token: ${response.error} - ${response.error_description}`
    );
    localStorage.removeItem("code_verifier");
  } else {
    localStorage.setItem("access_token", response.access_token);
  }
};
