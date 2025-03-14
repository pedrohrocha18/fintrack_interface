import { useState } from "react";
import { Nav } from "./styles/stylescomponents";
import logo from "../assets/imgs/logo.png";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <Nav>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`${menuOpen ? "open" : isClosing ? "closing" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
