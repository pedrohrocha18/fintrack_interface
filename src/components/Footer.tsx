import { Footer } from "./styles/stylescomponents";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <Footer>
      <ul className="footer-links">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/create">Criar Conta</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="copyright">Pedro H. Rocha
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </Footer>
  );
};

export default FooterComponent;
