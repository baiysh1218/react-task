import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <img
          width="100px"
          src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
          alt="logo"
        />
      </div>
      <div className="nav-bar-p">
        <p className="p">Nav Bar</p>
        <p className="p">Nav Bar</p>
        <p className="p">Nav Bar</p>
        <p className="p">Nav Bar</p>
      </div>
    </div>
  );
};

export default Navbar;
