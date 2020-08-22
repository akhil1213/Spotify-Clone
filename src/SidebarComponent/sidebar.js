import React, { useState, useEffect } from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SidebarOption from "../SidebarOption/SidebarOption";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ userPlayList }, dispatch] = useDataLayerValue();
  console.log(userPlayList);
  return (
    <div className="sidebar">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} optionText="Home" />
      <SidebarOption Icon={SearchIcon} optionText="Search" />
      <SidebarOption Icon={LibraryMusicIcon} optionText="Your Library" />
      <div className="sidebar__title">
        <strong>PLAYLISTS</strong>
        <hr />
      </div>
      {userPlayList?.items?.map((playlist) => {
        return <SidebarOption optionText={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;
