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
          <a href="/signup">Criar Conta</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="copyright">FinTrack
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </Footer>
  );
};

export default FooterComponent;
