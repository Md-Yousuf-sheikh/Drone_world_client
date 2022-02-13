import React, { useState } from 'react';
import { FaLockOpen, FaUserPlus, FaLock } from "react-icons/fa";

const Login = ({ setHideForm }) => {
    const [registered, setRegistered] = useState(true)
    return (
        <div className='min-w-screen h-screen bg-black/60  backdrop-blur-md backdrop-filter   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50'>
            <div className='container  mx-auto px-4'>
                <div className='bg-white relative md:w-2/5 w-full mx-auto pb-8 grid gap-5'>
                    <div>
                        <div className='flex justify-between text-left items-center pb-6'>
                            <button onClick={() => setRegistered(true)} className={`${registered ? 'text-gray-400' : 'bg-gray-200 border-r-2'} w-full text-gray-400  border-gray-300 p-4 text-lg font-Roboto flex items-center justify-center `}>{registered ? <FaLockOpen className='mr-2' /> : <FaLock className='mr-2' />} login</button>
                            <button onClick={() => setRegistered(false)} className={`${!registered ? "" : "bg-gray-200"}  text-gray-400 w-full  border-gray-300 p-4 text-lg font-Roboto flex items-center justify-center `}><FaUserPlus className='mr-2' />Register</button>
                        </div>
                        {registered &&
                            <div className='grid gap-5 px-4'>
                                <input type="email" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded' placeholder='Email *' />
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Password *' />
                                <p className='text-red-500'>Forget password? <button onClick={() => setRegistered(false)}>Create</button> </p>
                                <button className='bg-red-500 p-3 uppercase w-1/4 text-white hover:dark:bg-gray-900 rounded-md'>Submit</button>
                            </div>
                        }
                        {!registered &&
                            <div className='grid gap-5 px-4'>
                                <input type="text" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Full name *' />
                                <input type="email" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded' placeholder='Email *' />
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Password *' />
                                <input type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' placeholder='Re-password *' />

                                <button onClick={() => setRegistered(true)} className='text-red-500'>All ready have a account?</button>
                                <button className='bg-red-500 p-3 uppercase w-1/4 text-white hover:dark:bg-gray-900 rounded-md'>Submit</button>
                            </div>
                        }
                    </div>
                    <button onClick={() => setHideForm(false)} className='absolute top-0 right-0 rounded-sm -mt-3 -mr-3 text-white hover:dark:bg-gray-900 p-2 bg-red-500'> <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
};

export default Login;