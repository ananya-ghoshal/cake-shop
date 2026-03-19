import { createStore, combineReducers } from "redux";
import wishlistReducer from "./reducers/wishlistReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

const PERSIST_KEY = "cake_shop_state";

const loadState = () => {
  try {
    const serialized = localStorage.getItem(PERSIST_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const toPersist = {
      wishlist: state.wishlist,
      cart: state.cart,
    };
    const serialized = JSON.stringify(toPersist);
    localStorage.setItem(PERSIST_KEY, serialized);
  } catch (err) {
    window.alert("Failed to add item to wishlist/cart. Please try again.");
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
