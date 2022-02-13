import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MostVersatile = () => {
    return (
        <div data-aos="zoom-out-right" className='bg-gray-50 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 space-y-5  px-4 space-x-2'>
                <div className='px-4 w-full md:w-5/6 xl:w-2/3 mx-auto'>
                    <div className='space-y-8'>
                        <h1 className='text-3xl font-Poppins font-medium md:text-4xl lg:text-4xl xl:text-5xl '>THE WORLDS' MOST VERSATILE COMMERCIAL DRONE</h1>
                        <div className='flex  ml-3 space-x-2'>
                            <div className='bg-red-500 h-1 w-8'></div>
                            <div className='bg-red-300 h-1 w-4'></div>
                        </div>
                        <div className=''>
                            <h1 className='flex items-center text-gray-900 font-bold my-2'><span className='w-1 h-1 mr-2 bg-red-500'></span> Up to 40 minutes of flight time</h1>
                            <p className='justify-start text-gray-600 ml-3 font-sans '>The Freefly Star8 multi-rotor unpacks, ready to shoot, in under 5 minutes. It is easy to fly in our hands, powerful.</p>
                            <p className='justify-start text-gray-600 ml-3 font-sans my-2'>The Freefly Star8 multi-rotor unpacks, ready to shoot, in under 5 minutes. It is easy to fly in our hands, powerful, rigid, adaptable and reliable, and is a UAV optimized for up to 15-pound payloads.</p>
                            <h1 className='flex items-center text-gray-900 font-bold my-2'><span className='w-1 h-1 mr-2 bg-red-500'></span> High-level redundancy</h1>
                            <p className='justify-start text-gray-600 ml-3 font-sans'>The Freefly Star8 multi-rotor unpacks, ready to shoot, in under 5 minutes. It is easy to fly in our hands, powerful.</p>
                        </div>
                        <div className='space-x-4 text-base font-semibold'>
                            <button className='text-white hover:bg-gray-900 hover:text-white bg-red-500 text-base font-semibold py-3 px-8'>GO SHOP</button>
                            <span className='font-Poppins font-bold text-red-500'>$ 799.99</span>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div>
                    <div className='bg-cover mt-10 md:mt-0  bg-left-top flex items-center' style={{ backgroundImage: 'url("https://i.ibb.co/x3fSk2R/for-slider-1.webp")' }}>
                        <img data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='' src="https://drone-media.ancorathemes.com/wp-content/uploads/2019/07/image-shop-copyright-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostVersatile;