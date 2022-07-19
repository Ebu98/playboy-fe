import React from 'react'
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
import "./sidebar"
import "./sidebar.scss"

function SidebarButton(title, image) {
  return (
    <div className="sidebar-container">
        <img className="logo" src={logo} alt=""/>
        <div>
        <h3><img src={home} alt=""/> Home</h3>
        <h4><img src={discover} alt=""/> Discover</h4>
        <h4><img src={radio} alt=""/>  Radio</h4>
        <h4><img src={album} alt=""/>  Albums</h4>
        <h4><img src={podcast} alt=""/>  Podcast</h4>
        </div>
        <div className="library-container">
        <h3>Library</h3>
        <h4><img src={recent} alt=""/>  Recently Added</h4>
        <h4><img src={favor} alt=""/>  Favorite Songs</h4>
        <h4><img src={albums} alt=""/>  Favorite Albums</h4>
        <h4><img src={video} alt=""/>  Favorite Videos</h4>
        <h4><img src={local} alt=""/>  Local Files</h4>
        </div >
        <div className="playlist-container">
        <h3>Playlist</h3>
        <h4><img src={photo} alt=""/> Afrobeats</h4>
        <h4><img src={photo} alt=""/> OldSkool</h4>
        <h4><img src={photo} alt=""/> Street Jamzs</h4>
        <h4><img src={photo} alt=""/> Raps</h4>

        </div>
    </div>
  )
}
export default  SidebarButton;