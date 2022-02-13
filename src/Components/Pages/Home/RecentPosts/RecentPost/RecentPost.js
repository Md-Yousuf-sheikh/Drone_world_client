import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = () => {
    return (
        <div>
            <div className='border-8 px-12 hover:border-red-500 transition-all ease-in-out delay-100 py-10 space-y-4 '>
                <h1 className='text-2xl md:text-4xl text-gray-900 hover:text-red-500 font-Poppins font-medium -tracking-wider'>DRONE WITH CLAWS - LEARN ABOUT FEATURES!</h1>
                <p className='text-red-500 font-semibold hover:text-gray-900'>August 2, 2017</p>
                <p className='pt-5 pb-8'>
                    Despite geopolitical tensions and security concerns, the drone industry’s reliance on DJI remains firm.
                </p>
                <Link to="\" className='px-8  py-4 text-white bg-red-500 transition-all ease-in-out delay-100 hover:bg-gray-900 ' >READ MORE</Link>
            </div>
        </div>
    );
};

export default RecentPost;