import React, { useState } from 'react';
import '../layouts/QualidadeGallery.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => {
    return r.keys().map(r);
};

// Importar todas as imagens da pasta ../img/gallery
const images = importAll(require.context('../img/certificados', false, /\.(png|jpe?g|JPG|svg)$/));

const QualidadeGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <section className="galeria-container">
            <div className="galeria-grid">
                {images.map((image, index) => (
                    <div key={index} className="galeria-item" onClick={() => openImage(image)}>
                        <img src={image} alt={`Galeria Imagem ${index + 1}`} className="galeria-image" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="overlay" onClick={closeImage}>
                    <div className="overlay-content">
                        <span className="close-button" onClick={closeImage}>X</span>
                        <img src={selectedImage} alt="Imagem Ampliada" className="overlay-image" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default QualidadeGallery;