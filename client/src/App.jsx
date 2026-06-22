import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Carrito from "./pages/Carrito";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;