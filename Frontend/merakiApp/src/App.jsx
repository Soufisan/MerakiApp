import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/home/Home';

function App() {


  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <Home/>
        
     </BrowserRouter>
      
    </>
  )
}

export default App
