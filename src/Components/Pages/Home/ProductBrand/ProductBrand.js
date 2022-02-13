import React from 'react';
import Slider from "react-slick";

const ProductBrand = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mx-auto overflow-hidden  pt-10 md:pt-20 mb-20 md:pb-40' data-aos="fade-down">
            <h1 className='text-center text-3xl md:text-5xl -tracking-wider pt-14 font-Roboto'>PRODUCT BRANDS</h1>
            <div className='flex text-center justify-center py-10 ml-3 space-x-2'>
                <div className='bg-red-500 h-1 w-8'></div>
                <div className='bg-red-300 h-1 w-4'></div>
            </div>
            <Slider {...settings} className="space-x-3">
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/BNPzVxT/drone-brand-1.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/Wk7LZ1H/drone-brand-2.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/84fh3Pg/drone-brand-3.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/jL6sBhW/drone-brand-4.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/NxjXsPM/drone-brand-5.png" alt="" />
                </div>
                <div className=''>
                    <img className='mx-auto w-8/12  border-8 hover:border-red-500 transition-all' src="https://i.ibb.co/RpR37q0/drone-brand-6.png" alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default ProductBrand;