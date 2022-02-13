import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCollections from '../FeaturedCollections/FeaturedCollections';

const FeaturedCollection = () => {
    return (
        <div className='py-20' data-aos="zoom-in">
            <div className='mx-auto container'>
                <h1 className='text-center text-3xl md:text-5xl -tracking-wider pt-14 font-Poppins font-medium'>FEATURED COLLECTION</h1>
                <div className='flex text-center justify-center py-10 ml-3 space-x-2'>
                    <div className='bg-red-500 h-1 w-8'></div>
                    <div className='bg-red-300 h-1 w-4'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 '>
                    <FeaturedCollections />
                    <FeaturedCollections />
                    <FeaturedCollections />
                </div>
                <div className='mt-28 text-center'>
                    <Link to="" className='px-8 mx-auto hover:bg-gray-900 transition-all delay-100  py-4 bg-red-600 text-white'>SHOW ALL</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;