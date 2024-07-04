import React from 'react';
import '../layouts/AboutUs.css'

import prodqs from '../img/prodqs.png'

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-parallax">
                <h2 className="about-us-title">Quem Somos</h2>
            </div>
            <div className="about-us-content">
                <div className="about-us-image">
                    <img src={prodqs} alt="About Us" />
                </div>
                <div className="about-us-text">
                    <p>
                        A PRODEMOL INDÚSTRIA E COMÉRCIO LTDA foi fundada em 01 de dezembro de 1995, com o objetivo de fornecer serviços especializados no desenvolvimento de produtos e processos, especialmente para a indústria automobilística e de autopeças.
                    </p>
                    <p>
                        Com uma equipe de profissionais altamente qualificados e vasta experiência nas diversas áreas da indústria automobilística brasileira, a PRODEMOL se destaca pelo seu conhecimento tanto no mercado nacional quanto internacional. Estamos aptos a realizar desde simples mock-ups até a execução e coordenação de construção de ferramentas e implantação de processos de fabricação.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;