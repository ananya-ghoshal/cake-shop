import React from "react";
import "./Navbar.css";
import Menus from "./Menus";
import NavIcons from "./NavIcons";
import SubNav from "./SubNav";

function Navbar({ menus }) {
  return (
    <div className="topbar">
      <div className="navbar">
        <Menus props={menus} />
        <NavIcons />
      </div>
      <SubNav />
    </div>
  );
}

export default Navbar;
