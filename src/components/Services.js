import React from 'react';
import '../layouts/Services.css'

import serv1 from "../img/serv1.png"
import serv2 from "../img/serv2.png"
import serv3 from "../img/serv3.png"
import serv4 from "../img/serv4.png"

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <img src={serv1} alt="Service 1" className="service-icon" />
                <h3 className="service-title">Construção de Moldes</h3>
                <p className="service-description">
                    Somos especializados na construção de moldes novos para diversas indústrias, como montadoras e fabricantes de móveis como cadeiras e mesas, e muito mais. Com prazos ajustados às necessidades dos clientes e custos competitivos, garantimos eficiência e qualidade, trabalhando inclusive aos fins de semana para atender demandas urgentes.
                </p>
            </div>
            <div className="service">
                <img src={serv2} alt="Service 2" className="service-icon" />
                <h3 className="service-title">Modificação</h3>
                <p className="service-description">
                    Na nossa empresa, realizamos modificações de moldes de injeção conforme solicitado pelos clientes. Essas adaptações são feitas para atender às necessidades específicas de produção, garantindo que os moldes funcionem de maneira eficiente e precisa. Nosso serviço é personalizado, rápido e de alta qualidade, assegurando a satisfação total dos nossos clientes.
                </p>
            </div>
            <div className="service">
                <img src={serv3} alt="Service 2" className="service-icon" />
                <h3 className="service-title">Restauração</h3>
                <p className="service-description">
                    A restauração de moldes de injeção é essencial para manter a qualidade na fabricação de peças plásticas. Envolve limpeza, pintura e reparos para remover resíduos e proteger contra desgaste. Muitos moldes chegam ao Brasil via transporte marítimo, necessitando de avaliação e revitalização. A Prodemol garante moldes restaurados que produzem peças de alta qualidade e precisão.
                </p>
            </div>
            <div className="service">
                <img src={serv4} alt="Service 2" className="service-icon" />
                <h3 className="service-title">Usinagem</h3>
                <p className="service-description">
                    Nosso setor de usinagem de moldes de injeção é equipado com máquinas novas e operado por profissionais experientes. Nossa equipe dedicada e um preset adequado garantem rapidez na entrega, assegurando precisão e qualidade em cada projeto. Atendemos às necessidades específicas de nossos clientes com excelência, proporcionando resultados superiores em todos os trabalhos realizados.
                </p>
            </div>
        </div>
    );
};

export default Services;