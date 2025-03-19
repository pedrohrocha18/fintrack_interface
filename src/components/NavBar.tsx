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
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
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
          <a className="navLinks" href="/">Início</a>
        </li>
        <li>
          <a className="navLinks" href="/signup">Criar Conta</a>
        </li>
        <li>
          <a className="navLinks" href="/login">Login</a>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
