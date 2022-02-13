import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header/Header';

const Shop = () => {
    return (
        <div>
             <Header />
            <div className='bg-cover bg-right-top py-12 lg:py-40' style={{ backgroundImage: "url('https://drone-media.ancorathemes.com/wp-content/uploads/2017/11/title-img.jpg')" }}>

                <div className='mx-auto container text-center  '>
                    <div className='text-red-500 grid gap-2 font-semibold'>
                        <span className='bg-red-500 text-center py-4 px-2 rounded mx-auto text-3xl lg:text-5xl font-semibold text-white'>SHOP</span>
                        <span><Link className='' to="/">Home</Link>/<Link className='text-red-400' to="/shop">Shop</Link></span>
                    </div>
                </div>
            </div>
            <div>
                <h1>kjsbdihaidbhyijb</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;