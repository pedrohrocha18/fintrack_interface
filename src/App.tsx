// estilos
import "./App.css";
import NavBar from "./components/NavBar";

// routes
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
