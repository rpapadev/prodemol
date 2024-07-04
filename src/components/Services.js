import React from 'react';
import '../layouts/Services.css'

import serv1 from "../img/serv1.png"
import serv2 from "../img/serv2.png"

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <img src={serv1} alt="Service 1" className="service-icon" />
                <h3 className="service-title">Modificações em Moldes Prontos</h3>
                <p className="service-description">
                    Na PRODEMOL, oferecemos serviços especializados de modificação e restauração de moldes, garantindo um prazo que atenda às necessidades de nossos clientes, com um custo competitivo. Nosso compromisso é com a eficiência e a qualidade, trabalhando inclusive aos sábados e domingos para cumprir prazos curtos e demandas urgentes das montadoras.
                </p>
            </div>
            <div className="service">
                <img src={serv2} alt="Service 2" className="service-icon" />
                <h3 className="service-title">Engenharia de Excelência</h3>
                <p className="service-description">
                    Nosso departamento de engenharia técnica está capacitado para fornecer soluções perfeitas e sob medida para qualquer molde ou projeto. Com ampla experiência no desenvolvimento de ferramentas de grande porte, nossa equipe está pronta para enfrentar desafios complexos e entregar resultados excepcionais.
                </p>
            </div>
            {/* Adicione mais serviços conforme necessário */}
        </div>
    );
};

export default Services;