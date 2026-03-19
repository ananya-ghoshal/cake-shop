import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navigation Bar/Navbar";
import "./Wishlist.css";
import { removeFromWishlist } from "../../Redux/actions/wishlistActions";

function Wishlistpage() {
  const menuItems = {
    menu1: "Home",
  };
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="wishlistPage">
        <h2>Wishlisted Items</h2>
        {wishlist.length === 0 ? (
          <p className="emptyMsg">Your wishlist is empty</p>
        ) : (
          <div className="wishlistItems">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlistItem">
                <img src={item.img} alt={item.name || "Cupcake"} />
                <div className="itemDetails">
                  <div className="itemName">{item.name}</div>
                  <button
                    className="removeBtn"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlistpage;
