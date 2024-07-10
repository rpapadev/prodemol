import React from 'react';
import '../layouts/Location.css';

import emailIcon from '../img/emailIcon.png';
import phoneIcon from '../img/phoneIcon.png';
import locationIcon from '../img/locationIcon.png';

const Location = () => {
    return (
        <section className="location-container">
            <div className="location-info">
                <div className="contacts">
                    <h2>Nossos contatos:</h2>
                    <p>
                        <img src={emailIcon} alt="Email" /> comercial@prodemol.com.br
                    </p>
                    <p>
                        <img src={phoneIcon} alt="Phone" /> (11) 92345-6789 / (11) 1234-5678
                    </p>
                </div>
                <div className="address">
                    <h2>Nossa localização:</h2>
                    <p>
                        <img src={locationIcon} alt="Location" /> Estr Particular Sadae Takagi, 2760<br />
                        Cooperativa<br />
                        São Bernardo do Campo - SP<br />
                        CEP: 09852-070
                    </p>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6357096066046!2d-46.66830928502288!3d-23.562686684682654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3c5286e58f%3A0x2a5bb54a3c23227!2sEstr.%20Particular%20Sadae%20Takagi%2C%202760%20-%20Cooperativa%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009852-070%2C%20Brasil!5e0!3m2!1sen!2sus!4v1605628964787!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </section>
    );
};

export default Location;