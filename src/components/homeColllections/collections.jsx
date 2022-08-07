import React from "react";
import SideBar from "../../components/rightSideBar/sidebar";
import imageURL from "../../assests/icons/brianlund.jpg";
import "./collections.scss";

const HomeCollection = ({ title, imageUrl }) => {
  return (
    <>
    <div className="background-image">
      <h2 className="title">{title}</h2>
      <img src={imageUrl} alt="" />
      <span className="subtitle">Burnaboy</span>
      <div className="home-button-container">
      <button>play</button>
      <button><i class="fa-duotone fa-play"></i>follow</button>
      </div>
    </div>
    <SideBar title="Bounce" image={imageURL}/>
    </>
  );
};

export default HomeCollection;
