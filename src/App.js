import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Servicos from './pages/Servicos';
import Produtos from './pages/Produtos';
import Tecnologia from './pages/Tecnologia';
import Qualidade from './pages/Qualidade';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;