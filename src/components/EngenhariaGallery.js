import React, { useState } from 'react';
import '../layouts/EngenhariaGallery.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => {
    return r.keys().map(r);
};

// Importar todas as imagens da pasta ../img/triplets
const imagesA = importAll(require.context('../img/engenharia', false, /a\d+\.(png|jpe?g|JPG|svg)$/));
const imagesB = importAll(require.context('../img/engenharia', false, /b\d+\.(png|jpe?g|JPG|svg)$/));
const imagesC = importAll(require.context('../img/engenharia', false, /c\d+\.(png|jpe?g|JPG|svg)$/));

const EngenhariaGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragX, setDragX] = useState(0);

    const totalSets = imagesA.length;

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        if (isDragging) {
            if (Math.abs(dragX) > 50) {
                const newIndex = dragX < 0 ? currentIndex + 1 : currentIndex - 1;
                setCurrentIndex((newIndex + totalSets) % totalSets);
            }
            setIsDragging(false);
            setDragX(0);
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const currentDragX = e.clientX - startX;
            setDragX(currentDragX);
        }
    };

    return (
        <section className="triplet-gallery-container">
            <div className="triplet-gallery-grid" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                <div
                    className="triplet-gallery-set"
                    style={{
                        transform: `translateX(${isDragging ? dragX : 0}px)`,
                    }}
                >
                    <img
                        src={imagesA[currentIndex]}
                        alt={`Molde A${currentIndex + 1}`}
                        className="triplet-gallery-image"
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <img
                        src={imagesB[currentIndex]}
                        alt={`Molde B${currentIndex + 1}`}
                        className="triplet-gallery-image"
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <img
                        src={imagesC[currentIndex]}
                        alt={`Molde C${currentIndex + 1}`}
                        className="triplet-gallery-image"
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>
            <button className="arrow-left" onClick={() => setCurrentIndex((currentIndex - 1 + totalSets) % totalSets)}>&#9664;</button>
            <button className="arrow-right" onClick={() => setCurrentIndex((currentIndex + 1) % totalSets)}>&#9654;</button>
        </section>
    );
};

export default EngenhariaGallery;
