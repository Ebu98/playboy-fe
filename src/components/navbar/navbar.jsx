import React, { Fragment } from "react";
import "./navbar.scss";


function Navbar() {
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="navbar">
          <h3>Home</h3>
          <h3>Popular Songs</h3>
          {/* <div className="search-container">
          <p>&#128269;</p> */}
          <input  placeholder="Search" />
          {/* </div> */}
        </div>
      </div>
      <hr className="line" />
    </Fragment>
  );
}

export default Navbar;
