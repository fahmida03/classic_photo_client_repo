import React from 'react';
import six from '../../../Assets/six.jpg'
const Why = () => {
    return (
        <div className='flex w-11/12 mx-auto mt-24 mb-24 shadow-xl'>
            <div>
                <p className='text-2xl text-white'>WHY CHOOSE PIP BROADCAST WEDDING PHOTOGRAPHERS IN Dhaka</p>
                <br />
                <ol className='list-disc'>
                    <li>We offer best wedding photography, pre-wedding photography, wedding cinematography and much more.</li>
                    <li>We are specialized in candid wedding photography and videography</li>
                    <li>We have more than 12 years of experience.</li>
                    <li>We use modern techniques, cameras, lenses and equipments.</li>
                    <li>Our team comprises of well-qualified wedding photographers and videographers.</li>
                    <li>No matter what type of wedding package you want, we are ready to fulfill your requirement.</li>
                    <li>Our prime aim is to capture the best moments of your wedding to make them memorable.</li>
                </ol>
            </div>
            <div className='w-1/2'>
                <img src={six} alt="" />
            </div>
        </div>
    );
};

export default Why;