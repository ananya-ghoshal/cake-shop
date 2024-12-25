import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero Section/Hero";
import "./index.css";
import Cupcakes from "./Components/Cupcakes/Cupcakes";
import CakeRolls from "./Components/Cake Rolls/CakeRolls";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cupcakes" element={<Cupcakes />} />
        <Route path="/cakeRolls" element={<CakeRolls />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// http://localhost:5174/
