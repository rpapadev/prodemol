import React, { useState } from 'react';
import '../layouts/BeforeAfterGallery.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => {
    return r.keys().map(r);
};

// Importar todas as imagens da pasta ../img/beforeAfter
const beforeImages = importAll(require.context('../img/beforeAfter', false, /before\d+\.(png|jpe?g|JPG|svg)$/));
const afterImages = importAll(require.context('../img/beforeAfter', false, /after\d+\.(png|jpe?g|JPG|svg)$/));

const BeforeAfterGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(Array(beforeImages.length).fill(false));
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [draggedIndex, setDraggedIndex] = useState(-1);

    const toggleImage = (index) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = [...prevIndex];
            newIndex[index] = !newIndex[index];
            return newIndex;
        });
    };

    const handleMouseDown = (e, index) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDraggedIndex(index);
    };

    const handleMouseUp = (e) => {
        if (isDragging && draggedIndex !== -1) {
            if (Math.abs(startX - e.clientX) > 50) {
                toggleImage(draggedIndex);
            }
            document.documentElement.style.setProperty('--drag-x', '0px');
        }
        setIsDragging(false);
        setDraggedIndex(-1);
    };

    const handleMouseMove = (e) => {
        if (isDragging && draggedIndex !== -1) {
            e.preventDefault();
            const dragX = e.clientX - startX;
            document.documentElement.style.setProperty('--drag-x', `${dragX}px`);
        }
    };

    return (
        <section className="before-after-gallery-container">
            <div className="before-after-gallery-grid">
                {beforeImages.map((beforeImage, index) => (
                    <div
                        key={index}
                        className="before-after-gallery-item"
                        onMouseDown={(e) => handleMouseDown(e, index)}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <img
                            src={currentIndex[index] ? afterImages[index] : beforeImage}
                            alt={`BeforeAfter ${index + 1}`}
                            className={`before-after-gallery-image ${isDragging && draggedIndex === index ? 'dragging' : ''}`}
                            onDragStart={(e) => e.preventDefault()}
                        />
                        <div className="before-after-caption">
                            {currentIndex[index] ? 'Depois' : 'Antes'}
                        </div>
                        <button className="arrow-left" onClick={() => toggleImage(index)}>&#9664;</button>
                        <button className="arrow-right" onClick={() => toggleImage(index)}>&#9654;</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BeforeAfterGallery;