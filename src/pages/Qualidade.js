import React from 'react';
import '../layouts/Qualidade.css';

import QualidadeGallery from '../components/QualidadeGallery';

//import bannerlogo from '../img/bannerlogo.png';

const Qualidade = () => {
    return (
        <div className='main-content'>
            <section className="qualidade-container">
                <div className="banner-logo-quali">
                    {/*<img src={bannerlogo} alt="Logo Prodemol" />*/}
                </div>
                <h2 className="qualidade-title">Nossos Certificados</h2>
                <QualidadeGallery />
            </section>
        </div>
    );
};

export default Qualidade;