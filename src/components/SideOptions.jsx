import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarOptions.sass";

export default function SideOptions({ active, text, Icon }) {
  return (
    <div className={`sidebarOptions`}>
      <NavLink
        activeClassName='sidebarOptions--active'
        to={`/${text.toLowerCase()}`}
      >
        <Icon />
        {text}
      </NavLink>
    </div>
  );
}
