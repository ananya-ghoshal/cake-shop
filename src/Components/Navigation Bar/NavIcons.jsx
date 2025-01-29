import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import FavouriteIcon from "./Icons/fav.svg";
import ProfileIcon from "./Icons/profile.svg";
import SearchIcon from "./Icons/search.svg";
import BagIcon from "./Icons/shopping_bag.svg";
import LoginRegister from "./LoginRegister";

function NavIcons() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className="navIcons">
      <img
        src={FavouriteIcon}
        alt="FavouriteIcon"
        onClick={() => navigate("/wishlist")}
      />
      <img src={ProfileIcon} alt="ProfileIcon" onClick={handleOnClick} />
      <img src={SearchIcon} alt="SearchIcon" />
      <img src={BagIcon} alt="BagIcon" onClick={() => navigate("/cart")} />
      {isOpen && <LoginRegister onClose={close} />}
    </div>
  );
}

export default NavIcons;
