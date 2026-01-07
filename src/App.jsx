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
import AllFood from "./context/allfoodContext/AllFoodData";
import Homepage from "./pages/Homepage";
import SingleCard from "./pages/SingleCard";
import CartsData from "./context/CartsContext/CartsContext";
import Menu_CardNotReset from "./context/AddedNotReload/CardNotReset";
import Indining from "./pages/Indining";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Menu_CardNotReset>
        <CartsData>
          <AllFood>
            {" "}
            {/* fetch data for all card visible in home card*/}
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/CartsItems" element={<Cartsitems />} />
                <Route path="/RestaurentDetail" element={<SingleCard />} />

                <Route path="/food" element={<Indining />} />

                <Route path="/Booking" element={<Booking />} />
              </Routes>
            </BrowserRouter>
            
          </AllFood>
        </CartsData>
      </Menu_CardNotReset>
      {/* <Route path="/" element={<Restaurants />} /> */}
      {/* <Route path="/restaurants/:id" element={<RestaurantCard />} /> */}
    </>
  );
}

export default App;
