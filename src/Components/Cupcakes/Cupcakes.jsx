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
  const cupcakes = [
    { id: 1, img: PeachCupcake, name: "Strawberry Kiss" },
    { id: 2, img: LemonCupcake, name: "Lemon Zest" },
    { id: 3, img: ChocoCupcake, name: "Chocolate Dream" },
    { id: 4, img: HalloweenCupcake, name: "Halloween Spook" },
    { id: 5, img: ChristmasCupcake, name: "Christmas Cheer" },
    { id: 6, img: RedCupcake, name: "Red Velvet" },
  ];
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="cupcakes">
        {cupcakes.slice(0, 3).map((cupcake) => (
          <CupcakeItems
            key={cupcake.id}
            id={cupcake.id}
            img={cupcake.img}
            name={cupcake.name}
          />
        ))}
      </div>
      <div className="cupcakes_title">CUPCAKES</div>
      <div className="cupcakes">
        {cupcakes.slice(3).map((cupcake) => (
          <CupcakeItems
            key={cupcake.id}
            id={cupcake.id}
            img={cupcake.img}
            name={cupcake.name}
          />
        ))}
      </div>
    </>
  );
}

export default Cupcakes;
