import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cartsitems from "./pages/CartsItems";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/CartsItems" element={<Cartsitems />} />
        </Routes>
      </BrowserRouter>
      {/* <Route path="/" element={<Restaurants />} /> */}
      {/* <Route path="/restaurants/:id" element={<RestaurantCard />} /> */}
    </>
  );
}

export default App;
