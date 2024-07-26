import React from 'react';
import '../layouts/Engenharia.css';

import bannerlogo from '../img/bannerlogo.png';

import EngenhariaGallery from '../components/EngenhariaGallery';

const Engenharia = () => {
    return (
        <div className='main-content'>
            <section className="engenharia-container">
                <div className="banner-logo-eng">
                    <img src={bannerlogo} alt="Logo Prodemol" />
                </div>
                <h2 className="engenharia-title">Engenharia Técnica</h2>
                <p className="engenharia-text">
                    Nosso departamento de engenharia técnica é altamente capacitado para oferecer soluções perfeitas e sob medida para qualquer molde ou projeto. Com vasta expertise no desenvolvimento de ferramentas de grande porte, nossa equipe está preparada para atender às demandas mais desafiadoras, garantindo máxima eficiência e qualidade nos resultados.
                </p>
                <p className="engenharia-text">
                    Utilizamos softwares de ponta, como Powermill, Powershape e Autocad, todos da Autodesk, para assegurar precisão e inovação em cada etapa do processo. Nosso compromisso é entregar soluções técnicas que superem as expectativas e atendam às necessidades específicas de cada cliente.
                </p>
                <p className="engenharia-text">
                    Confie na nossa engenharia técnica para transformar suas ideias em realidade com excelência e precisão.
                </p>
            </section>
            <EngenhariaGallery />
        </div>
    );
};

export default Engenharia;