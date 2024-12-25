import React from "react";
import "./Navbar.css";
import FavouriteIcon from "./Icons/favourites.svg";
import ProfileIcon from "./Icons/profile.svg";
import SearchIcon from "./Icons/search.svg";
import BagIcon from "./Icons/shopping_bag.svg";

function NavIcons() {
  return (
    <div className="navIcons">
      <img src={FavouriteIcon} alt="FavouriteIcon" />
      <img src={ProfileIcon} alt="FavouriteIcon" />
      <img src={SearchIcon} alt="FavouriteIcon" />
      <img src={BagIcon} alt="FavouriteIcon" />
    </div>
  );
}

export default NavIcons;
