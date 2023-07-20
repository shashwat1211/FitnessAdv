import React from 'react';
import HeroBannerImage from '../assets/images/baner.png';

const HeroBanner = () => (
    <div className='flex max-w-[100vw] '>
        <div className='p-6 my-5 md:mx-[100px] flex flex-col mx-auto'>
            <h3 className='text-red-500 font-bold text-2xl'>Fitness Club</h3>
            <h1 className='font-bold text-4xl my-5'>
                Sweat, Smile <br />
                And Repeat
            </h1>
            <p className='text-xl my-3 '>
            Check out the most effective exercises personalized to you
            </p>
            <button className='rounded bg-red-500 text-white py-2 mt-3 text-xl w-[240px] hover:bg-red-600' onClick={()=>window.location.href="#exercises"}>
                    Explore Exercises </button>
            <h1 className='text-red-600 opacity-25 text-[210px] hidden md:block m-auto pt-[-30px]'>
                Exercise
            </h1>
        </div>
        <img src={HeroBannerImage} alt="hero-banner" className="hidden xl:block mt-[-13%] ml-[-220px] right-0 w-[550px]" />
    </div>
);

export default HeroBanner;