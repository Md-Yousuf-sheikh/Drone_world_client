import React from 'react';

const Footer = () => {

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className='bg-cover ' style={{ backgroundImage: "url('https://i.ibb.co/J7mhjK7/img-footer.jpg')" }}>
                <div className='w-full h-full bg-gradient-to-t py-10 from-gray-800'>
                    <h1 className='text-center font-Roboto text-3xl md:text-5xl text-white py-36'>LET'S FLY...</h1>
                </div>
            </div>
            <div className='dark:bg-gray-800 py-20'>
                <div className='container mx-auto px-4  '>
                    <div className=' justify-between  grid grid-cols-2  lg:flex'>
                        <div className='py-4'>
                            <h1 className='text-2xl md:text-3xl  xl:text-4xl font-Poppins text-white'>SERVICES</h1>
                            <ul className='text-gray-400 text-sm  space-y-2 mt-8'>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> The Bird’s Eye View</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> 4K Video</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Contacts</li>
                            </ul>
                        </div>
                        <div className='py-4'>
                            <h1 className='text-2xl md:text-3xl  xl:text-4xl font-Poppins text-white'>SERVICES</h1>
                            <ul className='text-gray-400 text-sm  space-y-2 mt-8'>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Event Coverage</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Property Tours</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Multimedia</li>
                            </ul>
                        </div>
                        <div className='py-4'>
                            <h1 className='text-2xl md:text-3xl  xl:text-4xl font-Poppins text-white'>LINKS</h1>
                            <ul className='text-gray-400 text-sm  space-y-2 mt-8'>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Our Team</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Clients</li>
                                <li className='flex items-center'><div className='bg-red-500 h-1.5 w-1.5 mr-3'></div> Media</li>
                            </ul>
                        </div>

                        <div className='py-4'>
                            <h1 className='text-2xl md:text-3xl  xl:text-4xl  font-Poppins text-white'>SIGNUP TO NEWSLETTER</h1>
                            <div className='relative mt-8 '>
                                <input className='w-8/12 py-2 md:py-3' type="text" />
                                <button type='submit' className='absolute top-0 bg-red-500 py-2 px-2 md:py-3 md:px-4  text-white font-serifh hover:dark:bg-gray-600'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;