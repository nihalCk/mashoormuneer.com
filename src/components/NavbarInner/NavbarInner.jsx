import "../NavbarInner/NavbarInner.css";

import logo1 from "../../assets/img/Mashoor Muneer.png";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "react-bootstrap";

const navbaritems = [
  {
    id: 1,
    link: "/photography",
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
      <Container className="header-second navbar-inner">
        <Link to="/" className="logo_show" onClick={myfunction}>
          <img src={logo1} alt="#" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu "}>
          {/* <li className="active">
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
          </li> */}

          {navbaritems.map((navitem) => (
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active " : "")}
                to={navitem.link}
                onClick={myfunction}
              >
                {navitem.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="humburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
        <div className="inner-nav-social" style={{ paddingTop: 20 }}>
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
