import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="search for artists, songs or albums" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="noimg" />
        <h4>{user?.display_name}</h4>
        <button className="header__logout" onClick={()=>dispatch({type:'LOGOUT'})}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
