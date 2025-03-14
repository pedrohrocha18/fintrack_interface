import imgPrincipal from "../assets/imgs/img_principal.png";
import Button from "../components/Button";
import { HomePage } from "../components/styles/stylescomponents";

const Home = () => {
  return (
    <HomePage>
      <div className="section">
        <div className="main_text_description_img">
          <h1>Gerencie suas finanças de forma simples e inteligente</h1>
          <p>
            Não perca mais tempo com planilhas complexas. Com o FinTrack, você
            registra e acompanha suas finanças de maneira prática e organizada.
          </p>
          <Button title="Criar Conta" />
        </div>
        <img src={imgPrincipal} alt="Imagem principal" className="main_img" />
      </div>
    </HomePage>
  );
};

export default Home;
