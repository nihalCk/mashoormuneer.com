import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Photography from "./routes/Photography";
import Contact from "./routes/Contact";
import Portraites from "./routes/Portraites";
import PortraitesPageTwo from "./routes/PortraitesPageTwo";
import Filims from "./routes/Filims";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portraites" element={<Portraites />} />
        <Route path="/portraitesPageTwo" element={<PortraitesPageTwo />} />
        <Route path="/filims" element={<Filims />} />
      </Routes>
    </>
  );
}

export default App;
