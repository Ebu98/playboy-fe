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
        <div className="home-link">
        <h4><Link to=""><img src={home} alt=""/> </Link >Home</h4>
        <h4><Link to="#"><img src={discover} alt=""/></Link > Discover</h4>
        <h4><Link to="#"><img src={radio} alt=""/> </Link > Radio</h4>
        <h4><Link to="#"><img src={album} alt=""/> </Link > Albums</h4>
        <h4><Link to="#"><img src={podcast} alt=""/></Link >  Podcast</h4>
        </div>
        <div className="library-link">
        <h3>Library</h3>
        <h4><Link to=""><img src={recent} alt="" /></Link >  Recently Added</h4>
        <h4><Link to="#"><img src={favor} alt=""/> </Link > Favorite Songs</h4>
        <h4><Link to={<FavoriteAlbums/>}><img src={albums} alt=""/> </Link > Favorite Albums</h4>
        <h4><Link to="#"><img src={video} alt=""/> </Link > Favorite Videos</h4>
        <h4><Link to="#"><img src={local} alt=""/>  </Link >Local Files</h4>
        </div >
        <div className="playlist-link">
        <h3>Playlist</h3>
        <h4><Link to="#"><img src={photo} alt=""/> </Link >Afrobeats</h4>
        <h4><Link to="#"><img src={photo} alt=""/> </Link >OldSkool</h4>
        <h4><Link to="#"><img src={photo} alt=""/> </Link >Street Jamzs</h4>
        <h4> <Link to="#"><img src={photo} alt=""/> </Link >Raps</h4>
        </div>
    </div>
  )
}
export default  Sidebar;