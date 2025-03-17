// estilos
import "./App.css";

// routes
import { Outlet } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
