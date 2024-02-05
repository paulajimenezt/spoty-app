export const checkAccessToken = async () => {
  const codeVerifier = localStorage.getItem("code_verifier");
  const accessToken = localStorage.getItem("access_token");

  if (accessToken && accessToken !== "undefined") {
    console.log("Logged in!");
    return;
  }

  if (!codeVerifier) {
    console.error("Login not found");
    return;
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
    console.error(
      `Error getting access token: ${response.error} - ${response.error_description}`
    );
    localStorage.removeItem("code_verifier");
  } else {
    localStorage.setItem("access_token", response.access_token);
  }
};