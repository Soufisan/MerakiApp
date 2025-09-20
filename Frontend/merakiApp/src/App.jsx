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

function App() {
    const [destinos, setdestinos] = useState(destinoDisponible);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home destinos={destinos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/totaldestinos" element={<TotalDestinos destinos={destinos} />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
      
    </>
  );
}

export default App;
