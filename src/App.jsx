import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    // Necesario para funcionar gh-pages
    <BrowserRouter basename={basename}>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
