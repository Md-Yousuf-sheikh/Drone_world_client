import React from 'react';
import { FaLock, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div>
            <div className='min-w-screen h-screen bg-black/60  backdrop-blur-md backdrop-filter   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50'>
                <div className='container  mx-auto px-4'>
                    <div className='bg-white relative md:w-2/5 w-full mx-auto pb-8 grid gap-5'>
                        <div>
                            <div className='flex justify-between text-left items-center pb-6'>
                                <Link to='/login' className=' w-full  border-t-2  text-gray-400 border-gray-300 p-4  text-lg font-Roboto flex items-center justify-center '><FaLock className='mr-2' /> login</Link>
                                <button disabled className='bg-gray-200 text-gray-400 w-full border-b-2 border-l-2 border-gray-300 p-4 text-lg font-Roboto flex items-center justify-center '><FaUserPlus className='mr-2' />Register</button>
                            </div>
                            <div className='grid gap-5 px-4'>
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Full name *' />
                                <input type="email" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded' placeholder='Email *' />
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Password *' />
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Re-password *' />

                                <Link to='/login' className='text-red-500'>All ready have a account?</Link>
                                <button className='bg-red-500 p-3 uppercase w-1/4 text-white hover:dark:bg-gray-900 rounded-md'>Submit</button>
                            </div>
                        </div>
                        <button className='absolute top-0 right-0 rounded-sm -mt-3 -mr-3 text-white hover:dark:bg-gray-900 p-2 bg-red-500'> <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;