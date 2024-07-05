import React from 'react';
import '../layouts/Empresa.css';

import Gallery from '../components/Gallery';

const Empresa = () => {
    return (
        <div className="main-content">
            <section className="historia-container">
                <h2 className="historia-title">Nossa História</h2>
                <p className="historia-text">
                    A PRODEMOL INDÚSTRIA E COMÉRCIO LTDA foi fundada em 01 de dezembro de 1995,
                    com o objetivo de fornecer serviços especializados no desenvolvimento de
                    produtos e processos, especialmente para a indústria automobilística e de autopeças.
                </p>
                <p className="historia-text">
                    Com uma equipe de profissionais altamente qualificados e vasta experiência nas
                    diversas áreas da indústria automobilística brasileira, a PRODEMOL se destaca
                    pelo seu conhecimento tanto no mercado nacional quanto internacional.
                    Estamos aptos a realizar desde simples mock-ups até a execução e coordenação
                    de construção de ferramentas e implantação de processos de fabricação.
                </p>
            </section>
            <Gallery />
        </div>
    );
};

export default Empresa;