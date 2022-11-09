import React from 'react';

const Services = ({ service }) => {
    const { img, title, details, price, rating } = service
    console.log(service)
    return (
        <div className='service'>        
            <div className="card w-96 bg-red-900 shadow-xl mx-auto mb-7">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <p>{details}</p>
                    <div className='flex'>
                        <p><span className='text-black'>Price: </span> {price}</p>
                        <p><span className='text-black'>Rating: </span> {rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-black">Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;