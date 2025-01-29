//actions
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

//action creator functions
export const addToWishlist = (cupcake) => ({
  type: ADD_TO_WISHLIST,
  payload: cupcake,
});

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});
