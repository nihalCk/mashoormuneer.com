import "./navbar.css";
import logo1 from "../../assets/img/Mashoor Muneer.png";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const navbaritems = [
  {
    id: 1,
    link: "/abouts",
    name: "Photography",
  },
  {
    id: 2,
    link: "/filims",
    name: "Films",
  },
  {
    id: 3,
    link: "/about",
    name: "About",
  },
  {
    id: 4,
    link: "/contact",
    name: "Contact",
  },
];
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

  const myfunction = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid className={color ? "header header-bg" : "header"}>
      <Container className="header-second navbar-hero">
        <Link to="/" className={color ? "logo_show" : "logo-1"}>
          Mashoor Muneer
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu "}>
          {navbaritems.map((navitem) => (
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? `active ` : "")}
                onClick={myfunction}
                to={navitem.link}
              >
                {navitem.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="humburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} className="times" />
          ) : (
            <FaBars size={20} className="bars" />
          )}
        </div>
        <div className="hero-nav-social" style={{ paddingTop: 20 }}>
          <BsInstagram
            size={15}
            style={{ cursor: "pointer" }}
            className="socialmedia"
          />
          <ImFacebook
            size={15}
            style={{ marginRight: 10, marginLeft: 10, cursor: "pointer" }}
            className="socialmedia"
          />
          <FiYoutube
            size={20}
            style={{ marginRight: 10, cursor: "pointer" }}
            className="socialmedia"
          />
          <SiGmail
            size={15}
            style={{ cursor: "pointer" }}
            className="socialmedia"
          />
        </div>
      </Container>
    </Container>
  );
};

export default Navbar;
