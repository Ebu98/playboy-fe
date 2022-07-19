import React from 'react'
import FavoriteAlbums from '../../../components/library-collections/favorite-album';
import FavoriteSongs from '../../../components/library-collections/favorite-songs';
import FavoriteVideo from '../../../components/library-collections/favorite-video';
import Local from '../../../components/library-collections/local-file';
import Recent from '../../../components/library-collections/recent-added';
// import imageUrl from "../../../assests/icons/brianlund.jpg";
// import image from "../../../assests/icons/brianlund.jpg";
import SidebarButton from '../../../components/sidebar/sidebar-button';

function Library() {
  return (
    <div>
        <SidebarButton title="Favorite Albums" to="" image={<FavoriteAlbums/>}/>
        <SidebarButton title="Favorite Albums" to="" image={<FavoriteSongs/>}/>
        <SidebarButton title="Favorite Albums" to="" image={<FavoriteVideo/>}/>
        <SidebarButton title="Favorite Albums" to="" image={<Local/>}/>
        <SidebarButton title="Favorite Albums" to="" image={<Recent/>}/>
        
        {/* <FavoriteAlbums title="Favorite Albums" to="" image={imageUrl}/>
        <FavoriteSongs  title="FavoriteSongs" to="" image={image}/>
        <FavoriteVideo  title="Favorite Video" to="" image={imageUrl}/>
        <Recent  title="Recently Added" to="" image={image}/>
        <Local  title="Local Files" to="" image={imageUrl}/> */}
    </div>
  )
}

export default Library;