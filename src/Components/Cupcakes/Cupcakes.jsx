import React from "react";
import Navbar from "../Navigation Bar/Navbar";
import "./Cupcakes.css";
import CupcakeItems from "./CupcakeItems";
import PeachCupcake from "../../../assets/cupcakes/peach.webp";
import LemonCupcake from "../../../assets/cupcakes/lemon.jpeg";
import ChocoCupcake from "../../../assets/cupcakes/choco.webp";
import HalloweenCupcake from "../../../assets/cupcakes/halloween.webp";
import RedCupcake from "../../../assets/cupcakes/red.webp";
import ChristmasCupcake from "../../../assets/cupcakes/christmas.webp";

function Cupcakes() {
  const menuItems = {
    menu1: "Home",
  };
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="cupcakes">
        <CupcakeItems props={{ img: `${PeachCupcake}` }} />
        <CupcakeItems props={{ img: `${LemonCupcake}` }} />
        <CupcakeItems props={{ img: `${ChocoCupcake}` }} />
      </div>
      <div className="cupcakes_title">CUPCAKES</div>
      <div className="cupcakes">
        <CupcakeItems props={{ img: `${HalloweenCupcake}` }} />
        <CupcakeItems props={{ img: `${ChocoCupcake}` }} />
        <CupcakeItems props={{ img: `${RedCupcake}` }} />
      </div>
    </>
  );
}

export default Cupcakes;
