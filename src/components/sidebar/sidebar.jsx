import React from 'react'
import { Link } from 'react-router-dom';

import home from "../../assests/icons/home.svg";
import logo from "../../assests/icons/logo.svg";
import discover from "../../assests/icons/discover.png";
import podcast from "../../assests/icons/podcast.png";
import radio from "../../assests/icons/radio.png";
import album from "../../assests/icons/album.png";
import favor from "../../assests/icons/favor.svg";
import video from "../../assests/icons/favor-video.svg";
import albums from "../../assests/icons/favor-album.svg";
import recent from "../../assests/icons/recent.svg";
import photo from "../../assests/icons/beats.svg";
import local from "../../assests/icons/local.svg";
import FavoriteAlbums from '../libraryCollections/favoriteAlbum';
import "./sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar-container">
        <img className="logo" src={logo} alt=""/>
        <div>
        <Link to=""><img src={home} alt=""/> Home</Link >
        <Link to="#"><img src={discover} alt=""/> Discover</Link >
        <Link to="#"><img src={radio} alt=""/>  Radio</Link >
        <Link to="#"><img src={album} alt=""/>  Albums</Link >
        <Link to="#"><img src={podcast} alt=""/>  Podcast</Link >
        </div>
        <div className="library-container">
        <h3>Library</h3>
        <Link to=""><img src={recent} alt="" />  Recently Added</Link >
        <Link to="#"><img src={favor} alt=""/>  Favorite Songs</Link >
        <Link to={<FavoriteAlbums/>}><img src={albums} alt=""/>  Favorite Albums</Link>
        <Link to="#"><img src={video} alt=""/>  Favorite Videos</Link >
        <Link to="#"><img src={local} alt=""/>  Local Files</Link >
        </div >
        <div className="playlist-container">
        <h3>Playlist</h3>
        <Link to="#"><img src={photo} alt=""/> Afrobeats</Link >
        <Link to="#"><img src={photo} alt=""/> OldSkool</Link >
        <Link to="#"><img src={photo} alt=""/> Street Jamzs</Link>
        <Link to="#"><img src={photo} alt=""/> Raps</Link>

        </div>
    </div>
  )
}
export default  Sidebar;