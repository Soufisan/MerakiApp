import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/about/About';
import { FooterApp } from './components/Footer/FooterApp';
import { Home } from './pages/home/Home';
import { Preguntas } from './pages/Preguntas/Preguntas';
import { destinoDisponible } from './assets/data/destinos';
import { useState } from 'react';
import { TotalDestinos } from './components/Totaldestinos/TotalDestinos';
import { InfoDestinos } from './components/infoDestinos/InfoDestinos';
import { Consejos } from './pages/Consejos/Consejos';
import { Vuelos } from './pages/Consejos/Vuelos';
import { Equipaje } from './pages/Consejos/Equipaje';
import { Documentacion } from './pages/Consejos/Documentacion';
import { Tiempo } from './pages/Consejos/Tiempo';
import {TiempoGeneral} from './pages/tiempo/TiempoGeneral'

function App() {
  const [destinos, setdestinos] = useState(destinoDisponible);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home destinos={destinos} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/totaldestinos"
            element={<TotalDestinos destinos={destinos} />}
          />
          <Route
            path="/infoDestinos/:id"
            element={<InfoDestinos destinos={destinos} />}
          />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/consejos" element={<Consejos />}>
            <Route index element={<Vuelos />} />
            <Route path="equipaje" element={<Equipaje />} />
            <Route path="documentacion" element={<Documentacion />} />
            <Route path="tiempo" element={<Tiempo />} />
          </Route>
          <Route path="/tiempoGeneral" element={<TiempoGeneral />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
