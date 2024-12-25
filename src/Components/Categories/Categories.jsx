import React from "react";
import "./Categories.css";
import cupcakes from "../../../assets/Categories/cupcake.jpeg";
import bento from "../../../assets/Categories/bento.jpeg";
import cake_roll from "../../../assets/Categories/cake-roll.jpeg";
import macaroon from "../../../assets/Categories/macaroon.webp";
import CategoryItem_topRow from "./CategoryItem_topRow";
import CategoryItem_bottomRow from "./CategoryItem_bottomRow";

function Categories() {
  return (
    <div className="categories" id="categories">
      <div className="category_title">Categories</div>

      <div className="category_container">
        <CategoryItem_topRow
          props={{ name: "CUPCAKES", img: `${cupcakes}`, path: "/cupcakes" }}
        />
        <CategoryItem_topRow
          props={{
            name: "CAKE ROLLS",
            img: `${cake_roll}`,
            path: "/cakeRolls",
          }}
        />
        <CategoryItem_bottomRow
          props={{ name: "MACAROONS", img: `${macaroon}`, path: "/cakeRolls" }}
        />
        <CategoryItem_bottomRow
          props={{ name: "BENTO CAKES", img: `${bento}`, path: "/cakeRolls" }}
        />
      </div>
    </div>
  );
}

export default Categories;
