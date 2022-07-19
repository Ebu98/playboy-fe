import React, { Fragment } from "react";
import "./navbar.scss";


function Navbar() {
  return (
    <Fragment>
      <hr className="line" />
      <div className="navbar-container">
        <div className="navbar">
          <h3>Home</h3>
          <h3>Popular Songs</h3>
          <input  placeholder="Search" />
        </div>
      </div>
      
    </Fragment>
  );
}

export default Navbar;
