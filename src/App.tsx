import React from 'react';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LivingRoom from './pages/LivingRoom/LivingRoom';
import Kitchen from './pages/Kitchen/Kitchen';
import Outdoors from './pages/Outdoors/Outdoors';
import Contact from './pages/Contact/Contact';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/outdoors" element={<Outdoors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;