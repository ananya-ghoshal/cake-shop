import React from "react";
import Favourites from "../Navigation Bar/Icons/favourites.svg";
import Cart from "../Navigation Bar/Icons/shopping_bag.svg";
import Wishlisted from "../Navigation Bar/Icons/wishlisted.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/actions/wishlistActions";
import { addToBag, removeFromBag } from "../../Redux/actions/cartActions";

function CupcakeItems({ id, img }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const isWishlisted = wishlist.some((item) => item.id === id);
  const isInCart = cart.some((item) => item.id === id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, img }));
    }
  };

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeFromBag(id));
    } else {
      dispatch(addToBag({ id, img }));
    }
  };
  return (
    <div className="cupcakeItems">
      <div className="cupcake_img">
        <img src={img} />
      </div>
      <div className="cupcake_icons">
        <div className="wishlist_icon" onClick={handleWishlistToggle}>
          <img
            src={isWishlisted ? Wishlisted : Favourites}
            alt="Wishlist Icon"
          ></img>
        </div>
        <div className="cart_icon" onClick={handleCartToggle}>
          <img src={isInCart ? Cart : Cart} alt="Cart Icon"></img>
        </div>
      </div>
    </div>
  );
}

export default CupcakeItems;
