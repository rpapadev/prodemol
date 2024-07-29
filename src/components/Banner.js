import React from 'react';
import { motion } from 'framer-motion';
import '../layouts/Banner.css'

import bannerlogo from '../img/bannerlogo.png'
import homebg from '../img/homebg.JPG'

const Banner = () => {
    return (
        <div className="banner">
            <img src={homebg} alt="Background" className="banner-bg" />
            <div className="banner-content">
                <motion.img
                    src={bannerlogo}
                    alt="Grupo Prodemol"
                    className="banner-logo"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1
                    className="banner-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Excelência em construção, modificação e revitalização de moldes
                </motion.h1>
                <motion.button
                    className="banner-button"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href="https://wa.me/5511976806942?text=Olá,%20estou%20entrando%20em%20contato%20através%20do%20seu%20site"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Solicite um orçamento agora mesmo!
                    </a>
                </motion.button>
            </div>
        </div>
    );
}

export default Banner;