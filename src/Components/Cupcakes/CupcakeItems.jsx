import React from "react";
import Favourites from "../Navigation Bar/Icons/favourites.svg";

function CupcakeItems({ props }) {
  return (
    <div className="cupcakeItems">
      <div className="cupcake_img">
        <img src={props.img}></img>
      </div>
      <div className="wishlist_icon">
        <img src={Favourites}></img>
      </div>
    </div>
  );
}

export default CupcakeItems;
