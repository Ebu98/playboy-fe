import React from "react";
import "../../pages/app/library/library.scss"

function FavoriteVideo({ title, image }) {
  return (
    <div className="background-image2">
      <h1 className="library-title">{title}</h1>
      <img src={image} alt="as" />
      <span className="subtitle">Burnaboy</span>
    </div>
  );
}

export default FavoriteVideo;
