import { motion } from "framer-motion";
import { LoginPage } from "../components/styles/stylescomponents";

const Login = () => {
  return (
    <LoginPage>
      <motion.div 
        className="login-box"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bem-vindo de volta!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Faça login para acessar sua conta
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Entrar
          </motion.button>
        </motion.form>
        
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          Esqueceu a senha?
        </motion.a>
      </motion.div>
    </LoginPage>
  );
};

export default Login;