import React from 'react';
import useTitle from '../../hook/useTitle';
import Banner from '../Banner/Banner';
import Why from '../Why/Why'
import Motive from '../Motive/Motive'
import Limited from '../Limited/Limited';
import "./Home.css"

const Home = () => {
    useTitle("home")
    return (
        
        <div className='container mx-auto'>
            
            <Banner></Banner>
            <Limited></Limited>
            <Why></Why>
            <Motive></Motive>
        </div>
    );
};

export default Home;