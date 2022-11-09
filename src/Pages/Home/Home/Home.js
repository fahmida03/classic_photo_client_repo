import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Why from '../Why/Why';
import Motive from './Motive/Motive';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Why></Why>
            <Motive></Motive>
        </div>
    );
};

export default Home;