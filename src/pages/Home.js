import React from 'react';

import Banner from '../components/Banner';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounter from '../components/StatsCouter';
import Contact from '../components/Contact';

function Home() {
    return (
        <div className="main-content">
            <Banner />
            <Services />
            <AboutUs />
            <WhyChooseUs />
            <StatsCounter />
            <Contact />
        </div>
    );
}

export default Home;