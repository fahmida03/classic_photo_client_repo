import React from 'react';

const Services = () => {
    return (
        <div>
            <h2 className='text-white text-3xl text-center'>Services</h2>
            
            <div className="card w-96 bg-red-900 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-black">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;