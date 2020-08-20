import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const tokenInfo = getTokenFromUrl();
    console.log(tokenInfo);
    if (tokenInfo) {
      setToken(tokenInfo.access_token);
      spotify.setAccessToken(tokenInfo.access_token);
      spotify.getMe().then((user) => console.log(user));
    }
    window.location.hash = ""; //security purposes.
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
