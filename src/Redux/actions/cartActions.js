export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG";

export const addToBag = (cupcake) => ({
  type: ADD_TO_BAG,
  payload: cupcake,
});

export const removeFromBag = (id) => ({
  type: REMOVE_FROM_BAG,
  payload: id,
});
