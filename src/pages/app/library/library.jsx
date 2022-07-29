import React from "react";
import FavoriteAlbums from "../../../components/libraryCollections/favoriteAlbum";
import FavoriteSongs from "../../../components/libraryCollections/favoriteSongs";
import FavoriteVideo from "../../../components/libraryCollections/favoriteVideo";
import Local from "../../../components/libraryCollections/localFile";
import Recent from "../../../components/libraryCollections/recentAdded";
import image from "../../../assests/icons/brianlund.jpg";

function Library() {
  return (
    <div>
      <FavoriteAlbums title="Favorite Album" image={image} />
      <FavoriteSongs title="Favorite Songs" image={image} />
      <FavoriteVideo title="Favorite Videos" image={image} />
      <Local title="Local file" image={image} />
      <Recent title="Recently Added" image={image} />
    </div>
  );
}

export default Library;
