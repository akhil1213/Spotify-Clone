import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
//using redux avoids prop drilling!!!!
//redux is a data layer , context api is built by react and is user frendly redux

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const tokenInfo = getTokenFromUrl();
    console.log(tokenInfo);
    if (tokenInfo) {
      setToken(tokenInfo.access_token);
      spotify.setAccessToken(tokenInfo.access_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", payload: user });
      });
    }
    window.location.hash = ""; //security purposes.
  }, []);
  console.log(user);
  return <div className="app">{token ? <h1>Logged in!</h1> : <Login />}</div>;
}

export default App;
