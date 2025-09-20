import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/about/About';
import { FooterApp } from './components/Footer/FooterApp';
import { Home } from './pages/home/Home';
import { Preguntas } from './pages/Preguntas/Preguntas';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
