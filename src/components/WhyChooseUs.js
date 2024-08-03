import React from 'react';
import '../layouts/WhyChooseUs.css';

import why1 from '../img/why1.png';
import why2 from '../img/why2.png';
import why3 from '../img/why3.png';
import why4 from '../img/why4.png';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <h2>Por que Escolher a Prodemol?</h2>
            <p>Descubra os principais motivos pelos quais somos a escolha certa para suas necessidades em moldes e engenharia.</p>
            <div className="why-choose-us-cards">
                <div className="why-choose-us-card">
                    <img src={why1} alt="Experiência Comprovada" />
                    <h3>Experiência Comprovada</h3>
                    <p>Com mais de 25 anos no mercado, nossa expertise em modificação e restauração de moldes é inigualável.</p>
                </div>
                <div className="why-choose-us-card">
                    <img src={why2} alt="Engenharia de Excelência" />
                    <h3>Engenharia de Excelência</h3>
                    <p>Nossa equipe técnica altamente qualificada garante soluções sob medida e resultados excepcionais.</p>
                </div>
                <div className="why-choose-us-card">
                    <img src={why3} alt="Atendimento Personalizado" />
                    <h3>Atendimento Personalizado</h3>
                    <p>Valorizamos cada cliente, oferecendo um atendimento dedicado e serviços adaptados às suas necessidades específicas.</p>
                </div>
                <div className="why-choose-us-card">
                    <img src={why4} alt="Tecnologia de Ponta" />
                    <h3>Tecnologia de Ponta</h3>
                    <p>Utilizamos as mais recentes tecnologias para garantir precisão, eficiência e qualidade em nossos projetos.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;