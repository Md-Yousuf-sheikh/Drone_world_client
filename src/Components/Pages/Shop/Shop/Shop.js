import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header/Header';
import ShopItem from '../ShopItem/ShopItem';
import { FaThList, FaTh } from "react-icons/fa";
import ShopCart from '../ShopCart/ShopCart';
import ShopItemSingle from '../ShopItem/ShopItemSingle';

const Shop = () => {
    const [list, setList] = useState(true)
    return (
        <div>
            <Header />
            <div className='bg-cover bg-right-top py-12 lg:py-40' style={{ backgroundImage: "url('https://drone-media.ancorathemes.com/wp-content/uploads/2017/11/title-img.jpg')" }}>

                <div className='mx-auto container text-center  '>
                    <div className='text-red-500 grid gap-2 font-semibold'>
                        <span className='bg-red-500 text-center py-4 px-2 rounded mx-auto text-3xl lg:text-5xl font-semibold text-white'>SHOP</span>
                        <span className='text-white uppercase'><Link className='hover:text-red-500 ' to="/">Home</Link> / <Link to="/shop">Shop</Link></span>
                    </div>
                </div>
            </div>
            {/* shop container */}
            <div className='container mx-auto px-4 '>
                <div className='grid lg:flex '>
                    <div className='lg:w-8/12 py-10'>
                        <div className='flex space-x-4 py-20'>
                            <FaTh onClick={() => { setList(true) }} className={`${list ? ' text-red-500' : 'text-gray-500'} text-2xl`} />
                            <FaThList onClick={() => { setList(false) }} className={`${!list ? ' text-red-500' : 'text-gray-500'} text-2xl`} />
                            <h1>Showing all 4 results</h1>
                        </div>
                        {
                            list && <div className='grid overflow-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-20 px-4'>

                                <ShopItem />
                                <ShopItem />
                                <ShopItem />
                                <ShopItem />
                                <ShopItem />

                            </div>
                        }

                        {
                            !list && <div className='grid  grid-cols-1 px-4'>

                                <ShopItemSingle />
                                <ShopItemSingle />
                                <ShopItemSingle />
                                <ShopItemSingle />
                                <ShopItemSingle />

                            </div>
                        }
                    </div>
                    <div className='lg:w-4/12 py-10'>
                        <div className='py-20 px-5 grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-6 '>
                            {/* SHOPPING CART */}
                            <div className='bg-gray-100 p-5 border-b-2'>
                                <h1 className='text-xl font-Roboto py-2'>SHOPPING CART</h1>
                                <div className='flex text-center ml-1 pb-4  space-x-2'>
                                    <div className='bg-red-500 h-0.5 w-6'></div>
                                    <div className='bg-red-300 h-0.5 w-4'></div>
                                </div>
                                <div className='py-5 space-y-5 max-h-60 overflow-y-auto'>
                                    <ShopCart />
                                    <ShopCart />
                                    <ShopCart />
                                    <ShopCart />
                                </div>
                            </div>
                            {/* FILTER BY PRICE */}
                            <div className='bg-gray-100 p-5 border-b-2'>
                                <h1 className='text-xl font-Roboto py-2'>FILTER BY PRICE</h1>
                                <div className='flex text-center ml-1 pb-4  space-x-2'>
                                    <div className='bg-red-500 h-0.5 w-6'></div>
                                    <div className='bg-red-300 h-0.5 w-4'></div>
                                </div>
                                <div className='py-5 max-h-60 overflow-y-auto'>

                                </div>
                            </div>
                            {/* PRODUCT SEARCH*/}
                            <div className='bg-red-600 p-5 border-b-2 border-red-400'>
                                <h1 className='text-xl text-white font-Roboto py-2'>PRODUCT SEARCH</h1>
                                <div className='flex text-center ml-1 pb-4  space-x-2'>
                                    <div className='bg-gray-50 h-0.5 w-6'></div>
                                    <div className='bg-gray-300 h-0.5 w-4'></div>
                                </div>
                                <form className='py-5  max-h-60 relative'>
                                    <input className='py-2 focus:outline-none px-2 font-Poppins  text-red-400' type="text" />
                                    <button type='submit' className='py-2 px-2 bg-gray-300 text-red-500 font-Poppins hover:bg-red-400 hover:text-gray-50'>SEARCH</button>
                                </form>
                            </div>
                            {/* CATEGORIES*/}
                            <div className='bg-gray-100 p-5  border-b-2'>
                                <h1 className='text-xl font-Roboto py-2'>CATEGORIES</h1>
                                <div className='flex text-center ml-1 pb-4  space-x-2'>
                                    <div className='bg-red-500 h-0.5 w-6'></div>
                                    <div className='bg-red-300 h-0.5 w-4'></div>
                                </div>
                                <div className='py-5  max-h-60 overflow-y-auto'>
                                    <ul className='font-Roboto '>
                                        <li className='flex items-center'><div className='mr-2 w-2 h-2 bg-red-600' /> Drone</li>
                                        <li className='flex items-center'><div className='mr-2 w-2 h-2 bg-red-600' /> Uncategorized</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;