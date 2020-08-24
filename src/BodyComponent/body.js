import React from "react";
import "./body.css";
import Header from "./header";
function body() {
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img></img>
        <div className="body__info__text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default body;
