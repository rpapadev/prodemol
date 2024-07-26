import React from 'react';
import '../layouts/Empresa.css';

import BeforeAfterGallery from '../components/BeforeAfterGallery';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Maquinas from '../components/Maquinas';

//import bannerlogo from '../img/bannerlogo.png'

const Empresa = () => {
    return (
        <div className="main-content">
            <section className="historia-container">
                <div className="banner-logo-empresa">
                    {/*<img src={bannerlogo} alt="Logo Prodemol" />*/}
                </div>
                <h2 className="historia-title">Nossa História</h2>
                <p className="historia-text">
                    O Grupo Prodemol Moldes é uma empresa familiar fundada há 29 anos, que começou como um pequeno escritório com apenas duas pessoas. Com o tempo, crescemos e nos tornamos uma grande empresa com mais de 70 funcionários e muita história para contar.
                </p>
                <p className="historia-text">
                    Nossa trajetória é movida pela paixão pelas ferramentas, passando de pai para filho. Ao longo dos anos, investimos em tecnologia, ampliamos nossas instalações e formamos uma equipe altamente qualificada, capaz de enfrentar os desafios do mercado com competência e dedicação.
                </p>
                <p className="historia-text">
                    Essa jornada de crescimento e aprimoramento contínuo reflete nosso compromisso em oferecer soluções inovadoras e de alta qualidade para nossos clientes. Nossa história é marcada pela dedicação e pelo trabalho árduo, sempre buscando superar as expectativas e entregar os melhores resultados.
                </p>
                <p className="historia-text">
                    Venha conhecer o Grupo Prodemol Moldes e descubra como nossa experiência e paixão podem contribuir para o sucesso do seu projeto.
                </p>
                <BeforeAfterGallery />
            </section>
            <section className="historia-container">
                <h2 className="historia-title">Nossa Estrutura</h2>
                <p className="historia-text">
                    O Grupo Prodemol Moldes conta com uma estrutura de grande porte, projetada para oferecer o máximo de comodidade e eficiência. Nossas instalações abrangem 15 mil metros quadrados construídos, incluindo 15 escritórios, sala de reunião e refeitório próprio, proporcionando um ambiente confortável e funcional para nossos funcionários.
                </p>
                <p className="historia-text">
                    A área fabril é equipada com 12 máquinas CNC de última geração, permitindo-nos realizar uma ampla gama de serviços de usinagem com precisão e eficiência. Além disso, contamos com 03 máquinas de eletroerosão e 01 prensa de ajuste, garantindo versatilidade e alta qualidade em nossos processos produtivos.
                </p>
                <p className="historia-text">
                    Nossas instalações modernas e bem equipadas são projetadas para maximizar a produtividade e assegurar a qualidade dos produtos finais. Nossa equipe é composta por engenheiros, ferramenteiros, técnicos e operadores experientes, todos comprometidos com a excelência em cada projeto.
                </p>
            </section >
            <Gallery />
            <Maquinas />
            <Location />
        </div >
    );
};

export default Empresa;