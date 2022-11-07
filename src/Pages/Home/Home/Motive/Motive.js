import React from 'react';
import eight from '../../../../Assets/eight.jpg'


const Motive = () => {
    return (
        <div className='flex bg-red-900 w-11/12 mx-auto mb-24 rounded-xl shadow-xl'>
            <div className='w-full'>
                <img src={eight} alt="" />
            </div>
            <div className='ml-4 p-5 text-center my-auto'>
                <p className='text-2xl text-black text-xl'>OUR MOBILITY TO CAPTURE WEDDING CEREMONY</p>
                <p>We travel across the nation to capture the Pre Wedding, Wedding ceremony along with Reception. We went to Ahmedabad, New Delhi, Gaziabad, Benaras, Deoghar, Ranchi, Rourkela, Bhubaneswar, Tatanagar, Siliguri and many more places in India for Candid Photography and Videography. We worked for Gujrati, Marwari, Punjabi, Marathi, Kerelian, Orrissi, Bihari, Muslim, Christian and Bengali Wedding.</p>
            </div>
        </div>
    );
};

export default Motive;