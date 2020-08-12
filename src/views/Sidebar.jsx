import React from "react";

import "./Sidebar.sass";

import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import Messages from "@material-ui/icons/Message";
import Bookmarks from "@material-ui/icons/Bookmarks";
import Lists from "@material-ui/icons/List";
import Profile from "@material-ui/icons/Person";
import More from "@material-ui/icons/More";
import Twitter from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

import SideOptions from "../components/SideOptions";

export default function Navbar() {
	return (
		<div className='sidebar'>
				<Twitter className='sidebar__twitterIcon' />
				<SideOptions text='Home' Icon={Home} />
				<SideOptions text='Search' Icon={Search} />
				<SideOptions text='Notifications' Icon={Notifications} />
				<SideOptions text='Messages' Icon={Messages} />
				<SideOptions text='Bookmarks' Icon={Bookmarks} />
				<SideOptions text='Lists' Icon={Lists} />
				<SideOptions text='Profile' Icon={Profile} />
				<SideOptions text='More' Icon={More} />
				<Button variant='outlined' className='sidebar__tweet' fullWidth>
					Tweet
				</Button>
		</div>
	);
}
