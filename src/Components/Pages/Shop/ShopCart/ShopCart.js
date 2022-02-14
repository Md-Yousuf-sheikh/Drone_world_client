import React from 'react';
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const shopCart = () => {

    return (
        <div className='flex relative items-center group '>
            <div className='flex space-x-3 '>
                <img className='h-16 ' src="https://drone-media.ancorathemes.com/wp-content/uploads/2018/06/product-copyright-1-351x263.jpg" alt="" />
                <div className='text-xl uppercase'>
                    <h1 className='text-red-500 font-Roboto text-base'>Fetuer plane</h1>
                    <h1 className='text-red-500 font-Roboto text-base'>$8484 - $7826</h1>
                </div>
            </div>
            <div className='group-hover:absolute text-white bg-blend-darken hover:transition-all delay-700 ease-in-out hidden group-hover:flex text-2xl justify-center items-center space-x-9 bg-gray-900 bg-opacity-60  w-8/12 h-full '>
                <FiShoppingCart className='bg-red-500 p-2 text-3xl' />
                <FiTrash2 className='bg-red-500 p-2 text-3xl' />
            </div>
        </div>
    );
};

export default shopCart;