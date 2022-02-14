import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiLink } from "react-icons/fi";

const ShopItemSingle = () => {
    return (
        <div>
            <div className=' grid gap-3 space-x-4 md:gap-0 md:flex py-5'>
                <div className='relative group w-full md:w-4/12'>
                    <img data-aos="flip-right" className='mx-auto' src="https://drone-media.ancorathemes.com/wp-content/uploads/2018/06/product-copyright-1-351x263.jpg" alt="" />
                    <div className='absolute z-10 top-3 left-2 bg-red-500 text-white py-1 px-2'>SELS!</div>
                    <div className='group-hover:absolute hidden group-hover:flex top-0 left-0 w-full h-full group-hover:bg-gray-900 items-center justify-center space-x-4 group-hover:bg-opacity-70 transition-all ease-in-out delay-150'>
                        <span className='p-4 bg-red-600 text-white font-bold hover:translate-y-2 transition-all delay-100' ><FiShoppingCart /></span>
                        <span className='p-4 bg-red-600 text-white font-bold hover:translate-y-2 transition-all delay-100' ><FiLink /></span>
                    </div>
                </div>
                <div className='w-full md:w-8/12 '>
                    <h1 className='uppercase text-xl font-Roboto '>Fetuer plane (color)</h1>
                    <h1 className='text-sm font-Roboto text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat laoreet odio, sit amet tincidunt sem bibendum et. Praesent fermentum auctor malesuada. Nunc pretium lectus est, vitae sodales nisi dignissim id. Cras molestie blandit lobortis. Mauris varius maximus elit, non hendrerit sapien dapibus vitae.</h1>
                    <h1 className='uppercase text-md font-Roboto text-red-600 font-semibold '>$8484 - $7826</h1>
                    <div className=' pt-5'>
                        <Link to="/" className=' bg-red-600 hover:bg-gray-900 transition-all delay-100 text-white py-3 px-8'>BUY NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItemSingle;