import React from 'react';
import '../layouts/Servicos.css';

import ServicosGallery from '../components/ServicosGallery';

import bannerlogo from '../img/bannerlogo.png'

const Servicos = () => {
    return (
        <div className='main-content'>
            <section className="servicos-container">
                <div className="banner-logo-servicos">
                    <img src={bannerlogo} alt="Logo Prodemol" />
                </div>
                <h2 className="servicos-title">Nossos Serviços</h2>
                <p className="servicos-text">
                    Oferecemos uma ampla variedade de serviços de usinagem, incluindo fresamento, torneamento e muito mais. Atendemos diversos setores, como automotivo, aeroespacial, médico e industrial, sempre adaptando nossas soluções às necessidades específicas de cada cliente.
                </p>
                <p className="servicos-text">
                    Somos especializados na produção e modificação de moldes de injeção, sopro e termoformados. Nossos moldes de injeção incluem:
                </p>
                <ul className="servicos-list">
                    <li>Bi-injeção</li>
                    <li>Sob-injeção</li>
                    <li>Injeção sobre tecido</li>
                </ul>
                <p className="servicos-text">
                    Os moldes de sopro que produzimos são adequados para:
                </p>
                <ul className="servicos-list">
                    <li>Tanques de combustível</li>
                    <li>Dutos de ar</li>
                    <li>Dutos de combustível</li>
                </ul>
                <p className="servicos-text">
                    Os termoformados que trabalhamos incluem materiais como:
                </p>
                <ul className="servicos-list">
                    <li>SMC</li>
                    <li>Woodstock</li>
                    <li>PV com fibra</li>
                    <li>PP com fibra</li>
                </ul>
                <p className="servicos-text">
                    Além disso, construímos dispositivos de controle, medição, solda, corte e furação, oferecendo soluções completas para nossos clientes. Nos especializamos em modificações e restaurações de moldes, trabalhando com prazos que atendam às necessidades dos clientes e mantendo um custo acessível. Para atender aos prazos curtos das montadoras, operamos também aos sábados e domingos, garantindo a entrega rápida e eficiente dos projetos.
                </p>
            </section>
            <ServicosGallery />
        </div>
    );
};

export default Servicos;