// estilos
import "./App.css";

// routes
import { Outlet } from "react-router-dom";

// components
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
