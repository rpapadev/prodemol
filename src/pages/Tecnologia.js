import React from 'react';
import '../layouts/Tecnologia.css';

import bannerlogo from '../img/bannerlogo.png';

const Tecnologia = () => {
    return (
        <div className='main-content'>
            <section className="tecnologia-container">
                <div className="banner-logo-tec">
                    <img src={bannerlogo} alt="Logo Prodemol" />
                </div>
                <h2 className="tecnologia-title">Tecnologia</h2>
                <p className="tecnologia-text">
                    No Grupo Prodemol Moldes, investimos em tecnologias avançadas para otimizar nossos processos e garantir a máxima eficiência. Utilizamos o sistema Zero Point da Schunk, que nos permite reduzir significativamente o tempo de setup das máquinas, proporcionando maior agilidade e produtividade.
                </p>
                <p className="tecnologia-text">
                    Implementamos também um sistema de preset de ferramentas, que assegura precisão e eficiência na troca de ferramentas. Além disso, utilizamos apalpadores de precisão para o zeramento de peças, garantindo exatidão em cada etapa do processo de usinagem.
                </p>
                <p className="tecnologia-text">
                    Essas tecnologias de ponta permitem que nossa empresa ofereça soluções de alta qualidade e precisão, atendendo às demandas mais exigentes de nossos clientes.
                </p>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/D5IZGLHWT0E"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Tecnologia;