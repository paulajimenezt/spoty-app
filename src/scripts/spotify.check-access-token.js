import { getSpotifyUser } from "./spotify.get-user";

export const checkAccessToken = async (setLoggedStatus) => {
  try {
    const codeVerifier = localStorage.getItem("code_verifier");
    const accessToken = localStorage.getItem("access_token");

    if (accessToken && accessToken !== "undefined") {
      const userId = await getSpotifyUser();
      setLoggedStatus(!!userId);
      return true;
    }

    const clientId = "eb2e6d0e839643f0abd983569aee9aea";
    const redirectUri = "http://localhost:3000/";
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
      localStorage.removeItem("code_verifier");
      setLoggedStatus(false);
    } else {
      localStorage.setItem("access_token", response.access_token);
      setLoggedStatus(true);
    }
  } catch (error) {
    setLoggedStatus(false);
  }
};
