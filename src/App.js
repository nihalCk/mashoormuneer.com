import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import HeadShot from "./routes/HeadShot";
import PortfolioOne from "./routes/PortfolioOne";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/headshot" element={<HeadShot />} />
        <Route path="/portfolioone" element={<PortfolioOne />} />
      </Routes>
    </>
  );
}

export default App;
