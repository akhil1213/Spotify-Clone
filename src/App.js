import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login/Login";
import Player from "./PlayerComponent/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
//using redux avoids prop drilling!!!!
//redux is a data layer , context api is built by react and is user frendly redux

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const tokenInfo = getTokenFromUrl();
    console.log(tokenInfo);
    if (tokenInfo) {
      // dispatch({ type: "SET_TOKEN", payload: tokenInfo.access_token });

      spotify.setAccessToken(tokenInfo.access_token);

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", payload: user });
      });
    }
    window.location.hash = ""; //security purposes.
  }, []);
  console.log(user);
  console.log(token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
