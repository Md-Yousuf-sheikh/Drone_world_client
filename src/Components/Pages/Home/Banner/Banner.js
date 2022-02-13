import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Banner = () => {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className=''>
        <Slider {...settings}>
          <div className='relative '>
            <img src="https://i.ibb.co/VxgjS7h/slider-shop-copyright-2.jpg" alt="" />
            <div className='absolute  z-10 w-full h-full flex top-3 md:top-8 items-center'>
              <div className='sm:container  mx-auto inline-flex items-center '>
                <div className='mx-auto px-4 sm:px-10 md:px-5'>
                  <div data-aos="zoom-out" className='bg-cover bg-right-top'>
                    <div className='mx-auto flex justify-between gap-0 md:gap-10 lg:gap-12 xl:gap-24 items-center'>
                      <img data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" className='h-24 ml-5 sm:h-36 md:h-56 lg:h-56 xl:h-60' src="https://i.ibb.co/5LgVN1R/for-slider-2.webp" alt="" />
                      <span className='text-center bg-cover' style={{ backgroundImage: 'url("https://i.ibb.co/x3fSk2R/for-slider-1.webp")' }} >
                        <h1 data-aos="zoom-out-down" data-aos-duration="1000" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl -tracking-tighter text-white font-Fjalla leading-tight'>BOOST YOUR<br />SOCIAL LOcalk</h1>
                      </span>
                      <img data-aos="fade-left" data-aos-offset="400" data-aos-easing="ease-in-sine" className='h-24 mr-5 sm:h-36 md:h-56 lg:h-56 xl:h-60' src="https://i.ibb.co/P6Xmgsq/for-slider-3.webp" alt="" />
                    </div>
                    <p className='text-center font-Poppins  text-xs md:text-base  mx-auto xs:w-3/3 md:w-2/3  w-2/3 text-white'>Extreme Aerial Photography and Video Artistry for  Lifestyle Action and Commerce</p>
                    <div className='py-4 sm:py-2 mt-0  md:mt-6 lg:mt-12 xl:mt-20 text-center'>
                      <Link to="/" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="5000" className='text-center text-xs md:text-sm hover:bg-red-500 hover:text-white transition-all  md:text-md font-Fjalla xl:px-14 xl:py-4   md:px-9 px-2 sm:px-4 py-2 m:py-4  bg-gray-100'>GO SHOP</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;