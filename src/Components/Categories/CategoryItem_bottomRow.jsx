import React from "react";
import { Link } from "react-router-dom";

function CategoryItem_bottomRow({ props }) {
  return (
    <div className="category_item">
      <Link to={props.path}>
        <img src={props.img} alt="props.img" className="category_image" />
        <p className="textOverImg" style={{ display: "none" }}>
          Click to order
        </p>
      </Link>
      <span className="vertical_text">{props.name}</span>
    </div>
  );
}

export default CategoryItem_bottomRow;
