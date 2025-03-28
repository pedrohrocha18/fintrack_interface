import { motion } from "framer-motion";
import { CreateAccountPage } from "../components/styles/stylescomponents";

const SignUpPage = () => {
  return (
    <CreateAccountPage>
      <motion.div
        className="signup-box"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Crie sua conta
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Preencha os campos abaixo para se cadastrar
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            {
              label: "Nome Completo",
              type: "text",
              placeholder: "Digite seu nome completo",
            },
            { label: "Email", type: "email", placeholder: "Digite seu email" },
            { label: "Senha", type: "password", placeholder: "Crie uma senha" },
            {
              label: "Confirmar Senha",
              type: "password",
              placeholder: "Repita a senha",
            },
            { label: "Data de Nascimento", type: "date" },
          ].map((input, index) => (
            <motion.div
              className="input-group"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} />
            </motion.div>
          ))}

          <motion.div
            className="input-group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <label>Gênero</label>
            <select>
              <option value="">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </motion.div>

          <motion.div
            className="checkbox-group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Eu concordo com os <a href="#">termos e condições</a>
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <button type="submit" className="submit-button">
              Criar Conta
            </button>
          </motion.div>
        </motion.form>

        <motion.p
          className="login-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Já tem uma conta? <a href="/login">Faça login</a>
        </motion.p>
      </motion.div>
    </CreateAccountPage>
  );
};

export default SignUpPage;
