// imgs
import imgPrincipal from "../assets/imgs/img_principal.png";
import imgPrincipal2 from "../assets/imgs/img_principal_2.png";
import iconSimplicidade from "../assets/imgs/icon_simplicidade.png";
import iconSeguranca from "../assets/imgs/icon_seguranca.png";
import iconAutomacao from "../assets/imgs/icon_automacao.png";
import imgComentarios from "../assets/imgs/img_comentarios.png";
import imgComment1 from "../assets/imgs/img_comment_1.png";
import imgComment2 from "../assets/imgs/img_comment_2.png";
import imgComment3 from "../assets/imgs/img_comment_3.png";

// components
import Button from "../components/Button";
import Card from "../components/Card";
import Comments from "../components/Comments";

// styles
import { HomePage } from "../components/styles/stylescomponents";

// framer motion
import { motion } from "framer-motion";
import PlanBenefits from "../components/Plans";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <HomePage>
      {/* Seção 1 */}
      <motion.div className="section" initial="hidden" animate="visible">
        <motion.div className="main_text_description_img" variants={fadeInUp}>
          <h1>Gerencie suas finanças de forma simples e inteligente</h1>
          <p>
            Não perca mais tempo com planilhas complexas. Com o FinTrack, você
            registra e acompanha suas finanças de maneira prática e organizada.
          </p>
          <Button title="Criar Conta" showHaveAccount={true} href="/create"/>
        </motion.div>
        <motion.img
          src={imgPrincipal}
          alt="Imagem principal"
          className="main_img"
          variants={fadeIn}
        />
      </motion.div>

      {/* Seção 2 */}
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={imgPrincipal2}
          alt="Imagem principal 2"
          className="main_img"
          variants={fadeIn}
        />
        <motion.div className="main_text_description_img" variants={fadeInUp}>
          <h3>Benefícios do FinTrack</h3>
          <Card
            image={iconSimplicidade}
            title="Simplicidade"
            description="Interface intuitiva e fácil de usar."
          />
          <Card
            image={iconAutomacao}
            title="Automação"
            description="Categorize e visualize gastos automaticamente."
          />
          <Card
            image={iconSeguranca}
            title="Segurança"
            description="Seus dados protegidos com criptografia avançada."
          />
        </motion.div>
      </motion.div>

      {/* Seção 3 - Depoimentos */}
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="main_text_description_img" variants={fadeInUp}>
          <h3>O que nossos usuários dizem?</h3>
          <Comments
            image={imgComment1}
            title="Carlos Almeida"
            description="O FinTrack revolucionou minha forma de gerenciar dinheiro! Nunca foi tão fácil controlar meus gastos."
          />
          <Comments
            image={imgComment2}
            title="Fernanda Souza"
            description="Simples, rápido e muito intuitivo. Recomendo para qualquer pessoa que quer organizar suas finanças!"
          />
          <Comments
            image={imgComment3}
            title="Mariana Aparecida"
            description="O FinTrack fez tudo ficar mais simples e agora tenho uma visão clara do meu dinheiro!"
          />
        </motion.div>
        <motion.img
          src={imgComentarios}
          alt="Imagem principal"
          className="main_img"
          variants={fadeIn}
        />
      </motion.div>
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
      {/* Seção 4 - planos */}
      <motion.div className="section" initial="hidden" animate="visible">
        <motion.div className="main_text_description_img" variants={fadeInUp}>
          <h3>Planos e Valores</h3>
          <PlanBenefits />
        </motion.div>
      </motion.div>
    </HomePage>
  );
};

export default Home;
