import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const Service = () => {
    const [service, setservice] = useState([])
    useEffect(() => {
        fetch('https://classic-photo-blush.vercel.app/service')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])
    return (
        <div>
            <h3 className='bg-black'>Courses</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio autem voluptatem doloremque, sint nemo perspiciatis et mollitia ipsum. Obcaecati optio nobis doloremque asperiores odit dignissimos sunt nemo, dicta ab. Consequuntur.</p>
            <hr />
            {
                service.map(service => <Services
                    key={service.id}
                >


                </Services>)
                // service.map(course => <p
                //     key={service.id}>
                //     <Link to={`/per-courses/${course.id}`}>
                //         {course.name} </Link></p>)
            }
        </div>
    );
};

export default Service;