import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Login from '../../../Login/Login';


const Navigation = () => {
    const { logOut, user } = useAuth()
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [OptionsToggle, setOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [hideForm, setHideForm] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)
    // handel change header
    const headerChange = () => {
        if (window.scrollY > 10) {
            setHeaderFixed(true)

        } else {
            setHeaderFixed(false)
        }
    }
    window.addEventListener('scroll', headerChange);
    // handel link more


    return (
        <div>
            {hideForm && <Login hideForm={hideForm} setHideForm={setHideForm} />}
            {/* <Register /> */}
            <div className={`${headerFixed ? 'lg:fixed' : 'px-2 lg:py-2 py-2 md:mt-2 lg:fixed'} w-full  transition-all delay-75 ease-in-out   z-30`}>
                <div className=" py-2 md:py-4 rounded dark:bg-gray-900 shadow-2xl ">
                    <div>

                        <div className="relative">

                            {/* For large screens */}
                            <div className="dark:bg-gray-900  bg-gray-50 px-6 ">
                                <div className=" mx-auto flex items-center justify-between">
                                    <Link to="/" className=" text-3xl font-Fjalla p-2   cursor-pointer bg-red-600 rounded  text-gray-800 dark:text-white" aria-label="the Crib.">
                                        D<span className='dark:text-gray-200  transform'>W</span>ORL<span className='dark:text-gray-200 transform'>D</span>
                                    </Link>
                                    <ul className="hidden  space-x-3 md:flex items-center justify-center">
                                        <li>
                                            <Link to="/" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out  " >
                                                HOME
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                ABOUT US
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                SERVICES
                                            </Link>
                                        </li>
                                        <li className='lg:flex hidden '>
                                            <Link to="/drones-equipment" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out "  >
                                                DRONES & EQUIPMENT
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                SHOP
                                            </Link>
                                        </li>
                                        <li className='lg:flex hidden'>
                                            <Link to="/media" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                MEDIA
                                            </Link>
                                        </li>
                                        <li className='lg:flex hidden'>
                                            <Link to="/contacts" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                CONTACTS
                                            </Link>
                                        </li>
                                        <li className='lg:hidden flex '>
                                            <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className=" dark:text-red-500  hidden md:flex   ">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="  justify-end flex items-center space-x-4 xl:space-x-8">
                                        <div className="hidden lg:flex items-center">
                                            <button onClick={() => setSearchInput(!searchInput)} aria-label="search items" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" >
                                                    <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <input id="searchInput" type="text" placeholder="search" className={` ${searchInput ? "hidden" : ""} text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`} />
                                        </div>
                                        <div className="flex ">
                                            {/* profile */}

                                            {
                                                user.email && <button aria-label="show options" onClick={() => setOptionsToggle(!OptionsToggle)} className=" dark:text-gray-50     ">
                                                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            }
                                            {
                                                !user.email && <button aria-label="show options" onClick={() => setHideForm(true)} className="uppercase text-gray-50 px-2 py-1 rounded   bg-red-500">
                                                    Login
                                                </button>
                                            }

                                            {/* Dash board link */}
                                            {
                                                user.email && <div className={`${OptionsToggle ? "hidden" : "flex"} absolute right-0 top-20 md:top-24 z-10`}>
                                                    <button aria-label="show options" onClick={() => setOptionsToggle(!OptionsToggle)} className="mr-2 dark:text-gray-900">
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                    <div className='bg-gray-900 p-5  grid'>
                                                        <Link to="/dashboard" className='text-white font-Roboto hover:text-red-500 hover:scale-110 transition-all delay-100 text-lg' >Dashboard</Link>
                                                        <Link to="/account" className='text-white font-Roboto hover:text-red-500 hover:scale-110 transition-all delay-100 text-lg' >Account</Link>
                                                        <Link to="/setting" className='text-white font-Roboto hover:text-red-500 hover:scale-110 transition-all delay-100 text-lg' >Setting</Link>
                                                        <Link to="/help" className='text-white font-Roboto hover:text-red-500 hover:scale-110 transition-all delay-100 text-lg' >Help</Link>
                                                        <button onClick={logOut} className='text-white font-Roboto hover:text-red-500 hover:scale-110 transition-all delay-100 text-lg' >Log Out</button>
                                                    </div>
                                                </div>
                                            }
                                            {/* profile */}
                                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="lg:hidden text-black ml-3 dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" >
                                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Link  */}
                            <div className={`${mdOptionsToggle ? "hidden" : "flex"} absolute z-10 top-24 right-0 bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                                <div className='w-2/3 mx-auto  flex'>
                                    <ul className='space-y-2'>
                                        <li>
                                            <Link to="/drones-equipment" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                DRONES & EQUIPMENT
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/media" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                MEDIA
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contacts" className="dark:text-white text-base lg:text-lg hover:text-red-500 hover:scale-110 no-underline hover:outline-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all ease-in-out " >
                                                CONTACTS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            {/* For small screen */}
                            <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"}  absolute dark:bg-gray-900  z-20 inset-0 md:hidden flex-col h-screen w-full`}>
                                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <svg className="fill-stroke text-gray-900 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" >
                                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <input type="text" placeholder="Search for products" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                                    </div>
                                    <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" >
                                            <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 p-4">
                                    <ul className="flex flex-col space-y-6">
                                        <li>
                                            <Link to="/" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                HOME
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                ABOUT US
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                SERVICES
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/drones-equipment" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                DRONES & EQUIPMENT
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                SHOP
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/media" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                MEDIA
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contacts" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                                CONTACTS
                                                <div>
                                                    <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" >
                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;