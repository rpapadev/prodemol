import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../layouts/Navbar.css';

import logo from '../img/logo.png';
import whatsapp from '../img/whatsapp.png';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Grupo Prodemol" />
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li>
                    <Link to="/empresa" className={`navbar-link ${location.pathname === '/empresa' ? 'active' : ''}`}>Empresa</Link>
                </li>
                <li>
                    <Link to="/servicos" className={`navbar-link ${location.pathname === '/servicos' ? 'active' : ''}`}>Serviços</Link>
                </li>
                <li>
                    <Link to="/produtos" className={`navbar-link ${location.pathname === '/produtos' ? 'active' : ''}`}>Produtos</Link>
                </li>
                <li>
                    <Link to="/tecnologia" className={`navbar-link ${location.pathname === '/tecnologia' ? 'active' : ''}`}>Tecnologia</Link>
                </li>
                <li>
                    <Link to="/qualidade" className={`navbar-link ${location.pathname === '/qualidade' ? 'active' : ''}`}>Qualidade</Link>
                </li>
                <li>
                    <Link to="/contato" className={`navbar-link ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
                </li>
            </ul>
            <div className="navbar-whatsapp">
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;