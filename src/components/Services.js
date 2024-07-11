import React from 'react';
import '../layouts/Services.css'

/*import serv1 from "../img/serv1.png"
import serv2 from "../img/serv2.png"*/

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                {/*<img src={serv1} alt="Service 1" className="service-icon" />*/}
                <h3 className="service-title">Construção de Moldes</h3>
                <p className="service-description">
                    Na PRODEMOL, oferecemos serviços especializados de modificação e restauração de moldes, garantindo um prazo que atenda às necessidades de nossos clientes, com um custo competitivo. Nosso compromisso é com a eficiência e a qualidade, trabalhando inclusive aos sábados e domingos para cumprir prazos curtos e demandas urgentes das montadoras.
                </p>
            </div>
            <div className="service">
                {/*<img src={serv2} alt="Service 2" className="service-icon" />*/}
                <h3 className="service-title">Modificação</h3>
                <p className="service-description">
                    Nosso departamento de engenharia técnica está capacitado para fornecer soluções perfeitas e sob medida para qualquer molde ou projeto. Com ampla experiência no desenvolvimento de ferramentas de grande porte, nossa equipe está pronta para enfrentar desafios complexos e entregar resultados excepcionais.
                </p>
            </div>
            <div className="service">
                {/*<img src={serv2} alt="Service 2" className="service-icon" />*/}
                <h3 className="service-title">Restauração</h3>
                <p className="service-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet felis lacus, in imperdiet nunc lacinia ac. Nunc fermentum lobortis mi id consectetur. Vivamus commodo pellentesque varius. Cras eleifend arcu vel dolor facilisis auctor. Quisque ornare non nisl sit amet mollis. Nullam tincidunt suscipit lectus, eget fringilla nisi fringilla sed. Integer imperdiet mollis sem sed fringilla. Pellentesque egestas lorem et elit gravida sollicitudin.
                </p>
            </div>
            <div className="service">
                {/*<img src={serv2} alt="Service 2" className="service-icon" />*/}
                <h3 className="service-title">Usinagem</h3>
                <p className="service-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet felis lacus, in imperdiet nunc lacinia ac. Nunc fermentum lobortis mi id consectetur. Vivamus commodo pellentesque varius. Cras eleifend arcu vel dolor facilisis auctor. Quisque ornare non nisl sit amet mollis. Nullam tincidunt suscipit lectus, eget fringilla nisi fringilla sed. Integer imperdiet mollis sem sed fringilla. Pellentesque egestas lorem et elit gravida sollicitudin.
                </p>
            </div>
        </div>
    );
};

export default Services;