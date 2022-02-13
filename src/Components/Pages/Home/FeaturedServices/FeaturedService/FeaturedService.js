import React from 'react';

const FeaturedService = () => {
    return (
        <div className=' py-20 mx-auto '>
            <div className='text-white '>
                <img data-aos="flip-left" className=' ring-white hover:ring-white ring-transparent ring-8 mb-8 delay-100 transition-all ease-in-out' src="https://drone-media.ancorathemes.com/wp-content/uploads/2019/08/image-copyright-2-270x361.jpg" alt="" />
                <h1 className='mt-4 hover:text-red-500  text-3xl font-Roboto uppercase'>Rentals</h1>
                <p className='mt-4 ml-2 flex items-center '><div className='w-2 h-2 mr-4 bg-red-600'></div> Available are drones for rent for any application</p>
            </div>
        </div>
    );
};

export default FeaturedService;