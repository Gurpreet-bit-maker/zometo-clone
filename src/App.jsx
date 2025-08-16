import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Restaurants from "./pages/Restaurants";
import RestaurantCard from "./pages/RestraurentCard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/restaurants/:id" element={<Deta />} /> */}
          <Route path="/" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
