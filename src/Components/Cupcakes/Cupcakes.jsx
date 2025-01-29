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
    { id: 1, img: PeachCupcake },
    { id: 2, img: LemonCupcake },
    { id: 3, img: ChocoCupcake },
    { id: 4, img: HalloweenCupcake },
    { id: 5, img: ChristmasCupcake },
    { id: 6, img: RedCupcake },
  ];
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="cupcakes">
        {cupcakes.slice(0, 3).map((cupcake) => (
          <CupcakeItems key={cupcake.id} id={cupcake.id} img={cupcake.img} />
        ))}
      </div>
      <div className="cupcakes_title">CUPCAKES</div>
      <div className="cupcakes">
        {cupcakes.slice(3).map((cupcake) => (
          <CupcakeItems key={cupcake.id} id={cupcake.id} img={cupcake.img} />
        ))}
      </div>
    </>
  );
}

export default Cupcakes;
