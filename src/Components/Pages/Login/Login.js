import React, { useState, useRef } from 'react';
import { FaLockOpen, FaUserPlus, FaLock } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaMobile } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = ({ setHideForm }) => {
    const [registered, setRegistered] = useState(true);
    const { GoogleSinInUser, sinUpWithEmail, registerWithEmail, user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    // login and regist document
    const emailLoginRef = useRef()
    const passwordLoginRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const re_passwordRef = useRef()
    // 
    const handelLogin = e => {
        e.preventDefault();
        const email = emailLoginRef.current.value;
        const password = passwordLoginRef.current.value;
        sinUpWithEmail(email, password, location, navigate)
        console.log(email, password);
    }
    const handelRegister = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        registerWithEmail(email, password, name, location, navigate)
        console.log(email, password);
    }
    console.log(user);
    if (user.email) {
        setHideForm(false)
    }

    return (
        <div className='min-w-screen h-screen bg-black/60  backdrop-blur-md backdrop-filter   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50'>
            <div className='container  mx-auto px-4'>
                <div data-aos="flip-down" className='bg-white  relative md:w-2/5 w-full mx-auto pb-8 grid gap-5'>
                    <div>
                        <from >
                            <div className='flex justify-between text-left items-center pb-6'>
                                <button onClick={() => setRegistered(true)} className={`${registered ? 'text-gray-400' : 'bg-gray-200 border-r-2'} w-full text-gray-400  border-gray-300 p-4 text-lg font-Roboto flex items-center justify-center  transition-all ease-in-out delay-200`}>{registered ? <FaLockOpen className='mr-2' /> : <FaLock className='mr-2' />} login</button>
                                <button onClick={() => setRegistered(false)} className={`${!registered ? "" : "bg-gray-200"}  text-gray-400 w-full  border-gray-300 p-4 text-lg font-Roboto flex items-center justify-center transition-all ease-in-out delay-200`}><FaUserPlus className='mr-2' />Register</button>
                            </div>
                            {registered &&
                                <form onSubmit={handelLogin}>
                                    <div className='grid gap-5 px-4 ' >
                                        <input ref={emailLoginRef} name='Email' required type="email" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' data-aos="zoom-in-left" placeholder='Email *' />
                                        <input ref={passwordLoginRef} name='Password' required type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' data-aos="zoom-in-left" placeholder='Password *' />
                                        <p className='text-red-500'>Forget password? <button onClick={() => setRegistered(false)}>Create</button> </p>
                                        <button type='submit' className='bg-red-500 p-3 uppercase w-1/4 text-white hover:dark:bg-gray-900 rounded-md'>Submit</button>
                                    </div>
                                </form>

                            }
                            {!registered && <div>
                                <div className='text-center pb-3 space-x-5 flex justify-center items-center'>
                                    <FaGoogle onClick={GoogleSinInUser} className='text-2xl hover:text-red-500 hover:scale-125 transition-all ease-in-out  text-blue-700' />
                                    <FaFacebook className='text-2xl  hover:text-red-500 hover:scale-125 transition-all ease-in-out  text-blue-700' />
                                    <FaMobile className='text-2xl  hover:text-red-500 hover:scale-125 transition-all ease-in-out  text-blue-700' />
                                </div>
                                <form onSubmit={handelRegister} className='grid gap-5 px-4'>
                                    <input ref={nameRef} name='Name' required type="text" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' data-aos="zoom-in-left" placeholder='Full name *' />
                                    <input ref={emailRef} name='Email' required type="email" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded' data-aos="zoom-in-left" placeholder='Email *' />
                                    <input ref={passwordRef} name='' required type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' data-aos="zoom-in-left" placeholder='Password *' />
                                    <input ref={re_passwordRef} name='Password' required type="password" className='py-3  focus:outline-none px-3 bg-gray-100 text-lg rounded ' data-aos="zoom-in-left" placeholder='Re-password *' />
                                    <button onClick={() => setRegistered(true)} className='text-red-500'>All ready have a account?</button>
                                    <button type='submit' className='bg-red-500 p-3 uppercase w-1/4 text-white hover:dark:bg-gray-900 rounded-md'>Submit</button>
                                </form>
                            </div>
                            }
                        </from>
                    </div>
                    <button onClick={() => setHideForm(false)} className='absolute z-30 top-0 right-0 rounded-sm -mt-3 -mr-3 text-white hover:dark:bg-gray-900 p-2 bg-red-500'> <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
};

export default Login;