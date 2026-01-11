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

import CartsData from "./context/CartsContext/CartsContext";
import Menu_CardNotReset from "./context/AddedNotReload/CardNotReset";
import Indining from "./pages/Food-Obtions/Indining";
import Booking from "./pages/Booking";
import DiningPage from "./pages/Food-Obtions/DiningPage";
import TakeOutPerent from "./pages/Food-Obtions/TakeOutPerent";
import TakeOutMenu from "./pages/Food-Obtions/TakeOutMenu";
import IconsRoute from "./components/IconsRoute";
import Ordered from "./pages/Food-Obtions/Ordered";

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

                {/* Dining page Routes */}
                <Route path="/food" element={<Indining />} />
                <Route path="/diningPage" element={<DiningPage />} />
                {/* Online Orders page Routes */}
                <Route path="/take-out" element={<TakeOutPerent />} />
                <Route path="/menuItems" element={<TakeOutMenu />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="Ordered" element={<Ordered />} />
              </Routes>
              <IconsRoute />
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
