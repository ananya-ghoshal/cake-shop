import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_BAG:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
