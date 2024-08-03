import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../layouts/Contact.css';

import whatsapp from '../img/whatsapp.png';
import contatoimg from '../img/contatoimg.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_1slbkl7',
            'template_760laj4',
            formData,
            'VJH5svfCL52GXhbSP'
        ).then((response) => {
            alert('Mensagem enviada com sucesso!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }).catch((err) => {
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    };

    return (
        <section className="contact-container">
            <div className="contact-content">
                <div className="contact-form">
                    <h2>Entre em contato</h2>
                    <h1>Solicite um orçamento!</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Mensagem:</label>
                        <textarea
                            rows="10"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Enviar!</button>
                    </form>
                </div>
                <div className="contact-image">
                    <img src={contatoimg} alt="Contato" />
                </div>
            </div>
            <div className="contact-whatsapp">
                <a href="https://wa.me/5511993223872?text=Olá,%20estou%20entrando%20em%20contato%20através%20do%20seu%20site"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ou entre em contato agora mesmo pelo WhatsApp<img src={whatsapp} alt="WhatsApp" />
                </a>
            </div>
        </section>
    );
};

export default Contact;