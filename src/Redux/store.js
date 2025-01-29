import { createStore, combineReducers } from "redux";
import wishlistReducer from "./reducers/wishlistReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
