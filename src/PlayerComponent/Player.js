import React from "react";
import "./Player.css";
import Sidebar from "../SidebarComponent/sidebar";
import Body from "../BodyComponent/body";
import Footer from "../FooterComponent/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
