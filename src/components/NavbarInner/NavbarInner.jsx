import "../NavbarInner/NavbarInner.css";

import logo1 from "../../assets/img/Mashoor Muneer.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Container fluid className={color ? "header header-bg" : "header"}>
      <Container className="header-second navbar-inner">
        <Link to="/" className="logo_show">
          <img src={logo1} alt="#" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu "}>
          <li>
            <Link to="/portfolio">Photography</Link>
          </li>
          <li>
            <Link to="/portfolio">Films</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Let's talk</Link>
          </li>
        </ul>
        <div className="humburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
      </Container>
    </Container>
  );
};

export default Navbar;
