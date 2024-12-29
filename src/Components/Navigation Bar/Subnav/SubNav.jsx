import Dropdown from "./Dropdown";
import "../Navbar.css";

import React from "react";

function SubNav() {
  const flavours = [
    { id: 1, label: "Chocolate" },
    { id: 2, label: "Vanilla" },
    { id: 3, label: "Strawberry" },
    { id: 4, label: "Red velvet" },
  ];
  const occassions = [
    { id: 5, label: "Birthday" },
    { id: 6, label: "Wedding" },
    { id: 7, label: "Anniversary" },
    { id: 8, label: "Christmas" },
  ];
  const types = [
    { id: 9, label: "Cupcakes" },
    { id: 10, label: "Bento Cakes" },
    { id: 11, label: "Macaroons" },
    { id: 12, label: "Cake Rolls" },
  ];
  return (
    <div className="subNav">
      <Dropdown props={{ text: "Flavours", options: flavours }} />
      <Dropdown props={{ text: "Occassions", options: occassions }} />
      <Dropdown props={{ text: "Types", options: types }} />
    </div>
  );
}

export default SubNav;
