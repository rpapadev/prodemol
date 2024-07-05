import React from 'react';
import '../layouts/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-left">
                <p>© Prodemol 2024</p>
            </div>
            <div className="footer-right">
                <p><a href="https://rpapadev.github.io/portifolio/" target="_blank" rel="noreferrer">Desenvolvido por Open Road</a></p>
            </div>
        </div>
    );
}

export default Footer;