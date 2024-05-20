import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home"
import FindYourCar from "./pages/find-your-car"
import SellOrTradeIn from "./pages/sell-or-trade-in"
import HowItWorks from "./pages/how-it-works"
import CarFinance from "./pages/car-finance"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Cars } from "./data/cars";
import FavoriteCars from "./pages/favorite-cars";


export default function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-your-car" element={<FindYourCar />} />
            <Route path="/sell-or-trade-in" element={<SellOrTradeIn />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/car-finance" element={<CarFinance />} />
            <Route path="/favorite-cars" element={<FavoriteCars />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </>

  );
}
