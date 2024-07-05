"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Teacher = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/Teachersignup/Teacherform');
    };
   

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
            <div className="flex flex-col md:flex-row rounded-lg md:rounded-3xl bg-white shadow-lg m-4 md:m-10 w-10/12 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-300 to-pink-300 hidden rounded-3xl md:block md:w-1/2 p-6 relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 space-y-6">
                        <h2 className="text-4xl font-bold mb-4 text-slate-900">Join Learn<b className='text-orange-600'>O</b>sphere</h2>
                        <p className="text-lg text-start text-gray-800">Empower students with your expertise.</p>
                        <ul className="space-y-4 text-start text-gray-800">
                            <li className="flex items-center justify-start">
                                <AiOutlineCheckCircle size={25} className="mr-2" />
                                Sign up with your email or Google account.
                            </li>
                            <li className="flex items-center justify-start">
                                <AiOutlineCheckCircle size={25} className="mr-2" />
                                Complete your profile with necessary details.
                            </li>
                            <li className="flex items-center justify-start">
                                <AiOutlineCheckCircle size={25} className="mr-2" />
                                Verify your email and start tutoring!
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-12 w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign up as a tutor</h2>

                    <div className="flex items-center justify-center mb-6">
                        <button onClick={handleClick} className="w-full md:w-auto py-2 px-4 mb-4 font-semibold bg-white border border-blue-400 hover:border-blue-500 rounded-full flex items-center justify-center gap-2 shadow-md">
                            <FcGoogle size={25} />
                            Sign up with Google
                        </button>
                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <span className="text-gray-500">or</span>
                    </div>

                    <form>
                        <div className="relative mb-4">
                            <input type="email" placeholder="Your email" style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }} className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5" />
                            <label className="absolute text-black font-bold duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-black peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">Email</label>
                        </div>

                        <div className="relative mb-4">
                            <input type="password" placeholder="Your password" style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }} className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5" />
                            <label className="absolute text-black font-bold duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-black peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">Password</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="remember-me" className="mr-2" />
                            <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
                        </div>

                        <button type="submit"  className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg shadow-md">
                            Get started
                        </button>

                        <p className="mt-4 text-center text-gray-500 text-xs">
                            By clicking Continue or Sign up, you agree to Learnosphere
                            <a href="#" className="text-blue-500"> Terms of Use</a>, including
                            <a href="#" className="text-blue-500"> Subscription Terms</a> and
                            <a href="#" className="text-blue-500"> Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Teacher;
