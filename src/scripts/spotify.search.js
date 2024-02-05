export const searchSong = async (query) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken || accessToken === "undefined") {
    console.log("Can't complete search: not logged in!");
    return;
  }

  const requestUrl = "https://api.spotify.com/v1/search";

  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    query: new URLSearchParams({}),
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
