import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Photography from "./routes/Photography";
import Contact from "./routes/Contact";
import Portraites from "./routes/Portraites";
import PortraitesPageTwo from "./routes/PortraitesPageTwo";
import PortraitesPageThree from "./routes/PortraitesPageThree";
import PortraitesPageFour from "./routes/PortraitesPageFour";
import PortraitesPageFive from "./routes/PortraitesPageFive";
import PortraitesPageSix from "./routes/PortraitesPageSix";
import Filims from "./routes/Filims";
import Travels from "./routes/Travels";
import TravelsPage1 from "./routes/TravelsPage1";
import TravelsPage2 from "./routes/TravelsPage2";
import TravelsPage3 from "./routes/TravelsPage3";
import TravelsPage4 from "./routes/TravelsPage4";
import Street from "./routes/Street";
import Abouts from "./routes/Abouts";
import Navbar from "./components/NavbarInner/NavbarInner";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portraites" element={<Portraites />} />
          <Route path="/portraitesPageTwo" element={<PortraitesPageTwo />} />
          <Route
            path="/portraitesPageThree"
            element={<PortraitesPageThree />}
          />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/portraitesPageFour" element={<PortraitesPageFour />} />
          <Route path="/portraitesPageFive" element={<PortraitesPageFive />} />
          <Route path="/portraitesPageSix" element={<PortraitesPageSix />} />
          <Route path="/filims" element={<Filims />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/travelspage1" element={<TravelsPage1 />} />
          <Route path="/travelspage2" element={<TravelsPage2 />} />
          <Route path="/travelspage3" element={<TravelsPage3 />} />
          <Route path="/travelspage4" element={<TravelsPage4 />} />
          <Route path="/street" element={<Street />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
