import React, { useState } from 'react';
import '../layouts/Gallery.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => {
    return r.keys().map(r);
};

// Importar todas as imagens da pasta ../img/gallery
const images = importAll(require.context('../img/gallery', false, /\.(png|jpe?g|JPG|svg)$/));

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <section className="galeria-container">
            <h2 className="galeria-title">Galeria de Imagens</h2>
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

export default Gallery;