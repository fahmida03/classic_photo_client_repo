import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://classic-photo-blush.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className='text-white text-3xl text-center'>Services</h2>
            <p>length: {service.length}</p>
            <div className='grid grid-cols-3 w-11/12 mx-auto'>
                {
                    service.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)

                }
            </div>
        </div>
    );
};

export default Service;