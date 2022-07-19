import React from "react";
// import "../library.scss";
import "../../pages/app/library/library.scss"

function Recent({ title, image }) {
  return (
    <div className="background-image2">
      <h1 className="library-title">{title}</h1>
      <img src={image} alt="as" />
      <span className="subtitle">Burnaboy</span>
    </div>
  );
}

export default Recent;
