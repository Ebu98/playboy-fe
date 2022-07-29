import React from "react";
import HomeCollection from "../homeColllections/collections";
import imageUrl from "../../assests/icons/brianlund.jpg";
import "./image.scss"

const Collection = () => {
  return (
    <div>
       <div className="container">
      <HomeCollection title="Home" imageUrl={imageUrl} />
      {/* <Library title="Library" image={image}/> */}
      </div>
    </div>
  );
};
export default Collection;
