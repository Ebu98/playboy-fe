import React from "react";
import "./sideBar.scss";

const SideBar = ({ title, image }) => {
  return (
    <div className="right-side-container">
        
      <div className="recently-play">
      <h4>Recently Played</h4>
          <div>
        {/* <h2 className="title">{title}</h2> */}
        <img src={image} alt="" />
        <span className="subtitle">Burnaboy</span>
      </div>
      <div >
        {/* <h2 className="title">{title}</h2> */}
        <img src={image} alt="" />
        <span className="subtitle">Fireboy</span>
      </div>
      <div >
        {/* <h2 className="title">{title}</h2> */}
        <img src={image} alt="" />
        <span className="subtitle">Omaley</span>
      </div>
      <div >
        {/* <h2 className="title">{title}</h2> */}
        <img src={image} alt="" />
        <span className="subtitle">Wizkid</span>
      </div>
      </div>
    </div>
  );
};
export default SideBar;
