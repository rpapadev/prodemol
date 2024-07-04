import React from 'react';

import Banner from '../components/Banner';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';

function Home() {
    return (
        <div className="main-content">
            <Banner />
            <Services />
            <AboutUs />
            <WhyChooseUs />
        </div>
    );
}

export default Home;