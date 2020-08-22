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
    // if (localStorage.getItem("token")) {
    //   dispatch({ type: "SET_TOKEN", payload: localStorage.getItem("token") });
    //   spotify.setAccessToken(tokenInfo.access_token);
    //   console.log("hi");
    //   spotify.getMe().then((user) => {
    //     dispatch({ type: "SET_USER", payload: user });
    //   });
    //   spotify.getUserPlaylists().then((playlists) => {
    //     dispatch({ type: "SET_PLAYLIST", payload: playlists });
    //   });
    // } else
    if (tokenInfo) {
      dispatch({ type: "SET_TOKEN", payload: tokenInfo.access_token });

      spotify.setAccessToken(tokenInfo.access_token);

      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({ type: "SET_USER", payload: user });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({ type: "SET_PLAYLIST", payload: playlists });
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
