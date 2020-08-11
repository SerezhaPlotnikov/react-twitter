import React from "react";
import "./sidebarOptions.css";
import { NavLink } from "react-router-dom";

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
