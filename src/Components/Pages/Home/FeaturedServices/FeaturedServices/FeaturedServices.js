import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';

const FeaturedServices = () => {
    return (
        <div className='bg-gray-900 py-20' data-aos="zoom-in">
            <div className=' mx-auto container px-4 text-white'>
                <h1 className='text-center text-3xl md:text-5xl -tracking-wider pt-14 font-Poppins font-medium'>FEATURED SERVICES</h1>
                <div className='flex text-center justify-center py-10 ml-3 space-x-2'>
                    <div className='bg-gray-50 h-1 w-8'></div>
                    <div className='bg-gray-500 h-1 w-4'></div>
                </div>
                <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
                    <FeaturedService />
                    <FeaturedService />
                    <FeaturedService />
                    <FeaturedService />
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;