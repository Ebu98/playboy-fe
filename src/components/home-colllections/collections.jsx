import React from "react";
import "./collections.scss";

const ImageCollection = ({ title, imageUrl }) => {
  return (
    <div className="background-image">
      <h2 className="title">{title}</h2>
      <img src={imageUrl} alt="" />
      <span className="subtitle">Burnaboy</span>
    </div>
  );
};

export default ImageCollection;
