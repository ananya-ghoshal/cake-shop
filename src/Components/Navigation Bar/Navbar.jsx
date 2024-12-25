import React from "react";
import "./Navbar.css";
import Menus from "./Menus";
import NavIcons from "./NavIcons";

function Navbar({ menus }) {
  return (
    <div className="navbar">
      <Menus props={menus} />
      <NavIcons />
    </div>
  );
}

export default Navbar;
