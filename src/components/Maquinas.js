import React from 'react';
import '../layouts/Maquinas.css';

// Função para importar todas as imagens da pasta
const importAll = (r) => {
    return r.keys().map(r);
};

// Importar todas as imagens da pasta ../img/maquinas
const machineImages = importAll(require.context('../img/maquinas', false, /\.(png|jpe?g|JPG|svg)$/));

// Dados dos equipamentos
const machineData = [
    { id: 1, name: "CNC LAGUN", description: "X-3000 Y-1160 Z-1000" },
    { id: 2, name: "CNC Anayak 1 HVM 3300", description: "X-2900 Y-1080 Z-1200" },
    { id: 3, name: "CNC Anayak 2 HVM 5000", description: "X-4200 Y-1400 Z-1160" },
    { id: 4, name: "CNC Anayak 3 HVM 5000", description: "X-4200 Y-1400 Z-1160" },
    { id: 5, name: "CNC PORTAL EROSTEC KM2015 L", description: "X-2100 Y-1400 Z-800" },
    { id: 6, name: "CNC EUROSTEC MCV 1300", description: "X-1350 Y-800 Z-680" },
    { id: 7, name: "CNC VEKER SPEED", description: "X-1000 Y-600 Z-600" },
    { id: 8, name: "FRESA CNC", description: "X-1250 Y-630 Z-630" },
    { id: 9, name: "FRESA CNC", description: "X-1060 Y-630 Z-550" },
    { id: 10, name: "FRESA CNC GRAFITEIRA", description: "X-400 Y-230 Z-465" },
    { id: 11, name: "FRESA CNC GRAFITEIRA", description: "X-400 Y-230 Z-465" },
    { id: 12, name: "2X – EROSÃO BANCO FIXO PENATRAÇÃO ENGEMAQ", description: "X-2600 Y-1450 Z-800" },
    { id: 13, name: "2X – EROSÃO PENATRAÇÃO", description: "" },
    { id: 14, name: "Ponte Rolante 10T, Ponte Rolante 20T, Ponte Rolante 5T", description: "" },
    { id: 15, name: "PRENSA AJUSTE 300T", description: "X-1500 Y-2500 Z-2000" },
    { id: 16, name: "FRESA CONVENCIONAL", description: "" },
    { id: 17, name: "TORNO ROMI 30A, RETIFICA CILINDRICA JONESHAPMAN, RETIFICA PLANA FERDIMAT", description: "" },
];

const Maquinas = () => {
    return (
        <div className='main-content'>
            <section className="maquinas-container">
                <h2 className="maquinas-title">Nossos Equipamentos</h2>
                {machineData.map((machine, index) => (
                    <div key={machine.id} className={`maquina-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                        <div className="maquina-image">
                            <img src={machineImages[index]} alt={machine.name} />
                        </div>
                        <div className={`maquina-text ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                            <h3>
                                {machine.name.split(', ').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p>{machine.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Maquinas;