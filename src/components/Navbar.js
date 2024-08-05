import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../layouts/Navbar.css';

import logo from '../img/logo.png';
import whatsapp from '../img/whatsapp.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Grupo Prodemol" />
            </div>
            <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/empresa" className={`navbar-link ${location.pathname === '/empresa' ? 'active' : ''}`} onClick={closeMenu}>Empresa</Link>
                    </li>
                    <li>
                        <Link to="/servicos" className={`navbar-link ${location.pathname === '/servicos' ? 'active' : ''}`} onClick={closeMenu}>Serviços</Link>
                    </li>
                    <li>
                        <Link to="/engenharia" className={`navbar-link ${location.pathname === '/engenharia' ? 'active' : ''}`} onClick={closeMenu}>Engenharia</Link>
                    </li>
                    <li>
                        <Link to="/tecnologia" className={`navbar-link ${location.pathname === '/tecnologia' ? 'active' : ''}`} onClick={closeMenu}>Tecnologia</Link>
                    </li>
                    <li>
                        <Link to="/qualidade" className={`navbar-link ${location.pathname === '/qualidade' ? 'active' : ''}`} onClick={closeMenu}>Qualidade</Link>
                    </li>
                    <li>
                        <Link to="/contato" className={`navbar-link ${location.pathname === '/contato' ? 'active' : ''}`} onClick={closeMenu}>Contato</Link>
                    </li>
                </ul>
                <div className="navbar-whatsapp">
                    <a
                        href="https://wa.me/5511993223872?text=Olá,%20estou%20entrando%20em%20contato%20através%20do%20seu%20site"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        <img src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
}

export default Navbar;