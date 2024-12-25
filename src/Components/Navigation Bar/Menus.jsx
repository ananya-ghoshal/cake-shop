import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

function Menus({ props }) {
  return (
    <div className="menus">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div>{props.menu1}</div>
      </Link>
      <ScrollLink to="category_title" smooth={true}>
        <div>{props.menu2}</div>
      </ScrollLink>
      <ScrollLink to="footer" smooth={true}>
        <div>{props.menu3}</div>
      </ScrollLink>
    </div>
  );
}

export default Menus;
