import React, { useState } from "react";
import "./Navbar.css";
import FavouriteIcon from "./Icons/favourites.svg";
import ProfileIcon from "./Icons/profile.svg";
import SearchIcon from "./Icons/search.svg";
import BagIcon from "./Icons/shopping_bag.svg";
import LoginRegisterModal from "./LoginRegisterModal";

function NavIcons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="navIcons">
      <img src={FavouriteIcon} alt="FavouriteIcon" />
      <img src={ProfileIcon} alt="FavouriteIcon" onClick={handleOnClick} />
      <img src={SearchIcon} alt="FavouriteIcon" />
      <img src={BagIcon} alt="FavouriteIcon" />
      {isModalOpen && <LoginRegisterModal onClose={closeModal} />}
    </div>
  );
}

export default NavIcons;
