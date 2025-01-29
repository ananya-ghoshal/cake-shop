import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero Section/Hero";
import "./index.css";
import Cupcakes from "./Components/Cupcakes/Cupcakes";
import CakeRolls from "./Components/Cake Rolls/CakeRolls";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Wishlistpage from "./Components/Wishlist/Wishlistpage";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/cakeRolls" element={<CakeRolls />} />
          <Route path="/wishlist" element={<Wishlistpage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
