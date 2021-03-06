import React from "react";
import "./SidebarOption.css";
function SidebarOption({ optionText, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{optionText}</h4> : <p>{optionText}</p>}
    </div>
  );
}

export default SidebarOption;
