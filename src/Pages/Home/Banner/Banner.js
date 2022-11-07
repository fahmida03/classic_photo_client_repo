import React from 'react';
import one from '../../../Assets/one.jpg'
import two from '../../../Assets/two.jpg'
import three from '../../../Assets/three.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-9/12 mb-12 mt-8 mx-auto rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carosel-img'>
                    <img src={one} />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-3">❯</a>
                </div>

                <div className="absolute flex justify-center transform -translate-y-1/2 right-10 bottom-24">
                    <p href="#slide4" className="text-3xl text-white">Adittaya & Susmita</p>
                </div>


            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carosel-img'>
                    <img src={two} />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-3">❯</a>
                </div>

                <div className="absolute flex justify-center transform -translate-y-1/2 right-10 bottom-24">
                    <p href="#slide4" className="text-3xl text-white">Khusi & Karan</p>
                </div>


            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <div className='carosel-img'>
                    <img src={three} />
               </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-3">❯</a>
                </div>

                <div className="absolute flex justify-center transform -translate-y-1/2 right-10 bottom-24">
                    <p href="#slide4" className="text-3xl text-white">Alia & Ranvir</p>
                </div>


            </div>

        </div>
    );
};

export default Banner;