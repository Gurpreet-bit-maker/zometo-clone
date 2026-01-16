import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CartsData from "./context/CartsContext/CartsContext";
import DiningRestaurent from "./pages/Food-Obtions/DiningRestaurent";
import DiningPage from "./pages/Food-Obtions/DiningPage";
import TakeOutPerent from "./pages/Food-Obtions/TakeOutPerent";
import TakeOutMenu from "./pages/Food-Obtions/TakeOutMenu";
import IconsRoute from "./components/IconsRoute";
import Ordered from "./pages/Food-Obtions/Ordered";
import DiningBooked from "./pages/Food-Obtions/DiningBooked";
import Takesinglefood from "./pages/Food-Obtions/Takesinglefood";
import Sign from "./pages/FormAuthentication/Sign";
import Login from "./pages/FormAuthentication/Login";
import UserData_Authentication from "./context/authentication/Authentication";

function App() {
  return (
    <>
      <CartsData>
        <BrowserRouter>
          <UserData_Authentication>
            <Navbar />

            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* Dining page Routes */}
              <Route path="/food" element={<DiningRestaurent />} />
              <Route path="/diningPage" element={<DiningPage />} />
              <Route path="/diningbooked" element={<DiningBooked />} />
              {/* Online Orders page Routes */}
              <Route path="/take-out" element={<TakeOutPerent />} />
              <Route path="/menuItems" element={<TakeOutMenu />} />
              <Route path="/ordered" element={<Ordered />} />
              <Route path="/quantity" element={<Takesinglefood />} />
              {/* Sign Form Page Route */}
              <Route path="/signForm" element={<Sign />} />
              {/* Login Form Page Route */}
              <Route path="/loginpage" element={<Login />} />
            </Routes>

            <IconsRoute />
          </UserData_Authentication>
        </BrowserRouter>
      </CartsData>
    </>
  );
}

export default App;
