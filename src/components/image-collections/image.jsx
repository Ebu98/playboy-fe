import React from "react";
import ImageCollection from "../home-colllections/collections";
import Navbar from '../../components/navbar/navbar';
import imageUrl from "../../assests/icons/brianlund.jpg";
import image from "../../assests/icons/brianlund.jpg";
import Library from "../../pages/app/library/library";
import SidebarButton from "../sidebar/sidebar-button";
import "./image.scss"

const Collection = () => {
  return (
    <div>
       <Navbar/>
       <SidebarButton/>
       <div className="container">
      <ImageCollection title="Home" imageUrl={imageUrl} />
      <Library title="Library" image={image}/>
      </div>
    </div>
  );
};
export default Collection;
