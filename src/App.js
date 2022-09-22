import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from './componentes/header/Header.js';
import Inicio from './componentes/inicio/Inicio.js';
import NotFoundPage from './componentes/404/NotFoundPage.js';
import Nosotros from './componentes/nosotros/Nosotros';
import Inversionistas from './componentes/inversionistas/Inversionistas';
import Servicios from './componentes/servicios/Servicios';
import Preguntas from './componentes/preguntas/Preguntas';
import Contactanos from './componentes/contactanos/Contactanos';
import Footer from './componentes/footer/Footer';
import Flotante from './componentes/flotante/Flotante';

function App() {
  return (

  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/preguntas-frecuentes" element={<Preguntas />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Contactanos/>
    <Footer/>
    <Flotante/>
  </Router>
    
  );
}

export default App;
