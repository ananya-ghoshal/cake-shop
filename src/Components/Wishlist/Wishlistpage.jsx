import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navigation Bar/Navbar";
import "./Wishlist.css";

function Wishlistpage() {
  const menuItems = {
    menu1: "Home",
  };
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="wishlistPage">
        <h2>Wishlisted Items</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <div className="wishlistItems">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlistItem">
                <img src={item.img} alt="Cupcake img" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlistpage;
