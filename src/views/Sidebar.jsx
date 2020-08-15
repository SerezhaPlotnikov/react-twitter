import { Button } from "@material-ui/core";
import Bookmarks from "@material-ui/icons/Bookmarks";
import Home from "@material-ui/icons/Home";
import Lists from "@material-ui/icons/List";
import Messages from "@material-ui/icons/Message";
import More from "@material-ui/icons/More";
import Notifications from "@material-ui/icons/Notifications";
import Profile from "@material-ui/icons/Person";
import Search from "@material-ui/icons/Search";
import Twitter from "@material-ui/icons/Twitter";
import React from "react";
import SideOptions from "../components/SideOptions";
import "./Sidebar.scss";

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
