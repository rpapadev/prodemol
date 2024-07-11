import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Servicos from './pages/Servicos';
import Produtos from './pages/Produtos';
import Tecnologia from './pages/Tecnologia';
import Qualidade from './pages/Qualidade';
import Contato from './pages/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/qualidade" element={<Qualidade />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;