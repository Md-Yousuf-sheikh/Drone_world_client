import React from 'react';
import Slider from "react-slick";
import './OurClientsLove.css';
import { RiDoubleQuotesL } from "react-icons/ri";

const OurClientsLove = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className='bg-cover' style={{ backgroundImage: "url('https://i.ibb.co/p1hwtxf/client-love-bg.jpg')" }} >
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div></div>
                <div className='bg-gray-900 text-center h-full mt-0 lg:mt-16 p-20' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='py-12'>
                        <div className='text-left'>
                            <h1 className='text-3xl md:text-5xl -tracking-wider pt-5 md:pt-14 text-white font-Poppins font-medium'>WE LOVE OUR CLIENTS, <br /> AND THEY LOVE US</h1>
                            <div className='flex py-10 ml-3 space-x-2'>
                                <div className='bg-gray-50 h-1 w-8'></div>
                                <div className='bg-gray-500 h-1 w-4'></div>
                            </div>
                            <Slider {...settings} className="w-full md:w-6/12 lg:w-10/12 xl:w-6/12 text-white justify">
                                <div className='group '>
                                    <p className=''><span className='group-hover:text-red-400 text-3xl'><RiDoubleQuotesL /></span> “I appreciate your amazing services and professional staff for all
                                        your hard work and creative thinking! It was fun, and I hope to work with you again soon!”
                                    </p>
                                    <h1 className='text-white group-hover:text-red-400 font-bold font-Roboto p-2' >Nicky Johnson</h1>
                                </div>
                                <div className='group '>
                                    <p className=''><span className='group-hover:text-red-400 text-3xl'><RiDoubleQuotesL /></span> “I appreciate your amazing services and professional staff for all
                                        your hard work and creative thinking! It was fun, and I hope to work with you again soon!”
                                    </p>
                                    <h1 className='text-white group-hover:text-red-400 font-bold font-Roboto p-2' >Nicky Johnson</h1>
                                </div>
                                <div className='group '>
                                    <p className=''><span className='group-hover:text-red-400 text-3xl'><RiDoubleQuotesL /></span> “I appreciate your amazing services and professional staff for all
                                        your hard work and creative thinking! It was fun, and I hope to work with you again soon!”
                                    </p>
                                    <h1 className='text-white group-hover:text-red-400 font-bold font-Roboto p-2' >Nicky Johnson</h1>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClientsLove;