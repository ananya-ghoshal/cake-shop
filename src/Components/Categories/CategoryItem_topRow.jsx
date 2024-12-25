import React from "react";
import { Link } from "react-router-dom";

function CategoryItem_topRow({ props }) {
  return (
    <div className="category_item">
      <span className="vertical_text">{props.name}</span>
      <Link to={props.path}>
        <img src={props.img} alt="props.img" className="category_image" />
      </Link>
    </div>
  );
}

export default CategoryItem_topRow;
