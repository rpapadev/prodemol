import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../layouts/StatsCounter.css';

const stats = [
    { value: 400, label: 'Clientes atendidos' },
    { value: 80, label: 'Colaboradores' },
    { value: 25, label: 'Anos de experiência' },
    { value: 4000, label: 'Serviços realizados' },
];

const StatsCounter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="stats-container" ref={ref}>
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <h1>{inView && (
                        <CountUp
                            start={0}
                            end={stat.value}
                            duration={4}
                            separator=","
                            className="stat-value"
                        />
                    )} +</h1>
                    <p className="stat-label">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;