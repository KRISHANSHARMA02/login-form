"use client"
import React,{useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Login = () => {

  const [isLogin,setIsLogin] = useState(true);

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [registerName,setRegisterName] = useState("");
  const [registerAvatar,setRegisterAvatar] = useState("");
  
  const LoginForm = () => {
    return(
       <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
             <h2 className='p-3 text-3xl font-bold '>Learn<b className='text-orange-600'>O</b>sphere.in</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <h3 className='text-xl font-semibold text-orange-400 pt-2'>Sign In!</h3>
             <div className='flex space-x-2 m-4 items-center justify-center'>
                <div className="socialIcon">
                <FaFacebook size={30}/>
                </div>
                <div className="socialIcon">
                <IoLogoGithub size={30}/>
                </div>
                <div className="socialIcon">
                <FcGoogle size={30} />  
                </div>
             </div>
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center'>
              <input type='email' className='rounded-2xl px-2 py-1 pr-10 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-2xl m-2 text-white bg-orange-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
                Sign In
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <p className='text-black mt-4 text-sm'>Don't have an account?</p>
             <p className='text-black mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
          </div>
    )
  }
  
  const  SignUpForm = () => {
     return(
        <div className="bg-slate-800 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
              <h2 className='p-3 text-3xl font-bold text-white'>Learn<b className='text-orange-600'>O</b>sphere.in</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
             <div className='flex space-x-2 m-4 items-center justify-center'>
                <div className="socialIcon border-white">
                <FaFacebook size={30}/>
                </div>
                <div className="socialIcon border-white">
                <IoLogoGithub size={30}/>
                </div>
                <div className="socialIcon border-white">
                <FcGoogle size={30} />  
                </div>
             </div>
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center mt-2'>
             <input type="password" className='rounded-2xl px-2  py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
          
              <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-orange-400 transition duration-200 ease-in'>
                Sign Up
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <p className='text-white mt-4 text-sm'>Already have an account?</p>
             <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
          </div>
     )
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
    <main className="flex items-center w-full px-2 md:px-20">
      <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
        <p className='text-6xl font-bold'>Learn<b className='text-orange-600'>O</b>sphere.in</p>
        <p className='font-medium text-lg leading-1 text-orange-400'>Engage with the Most Experienced and Qualified Home Tutors for Superior Learning</p>
      </div>
      {
        isLogin? (
         <LoginForm/>
        ):(
         <SignUpForm/>
        )
      }
    </main>
    </div>
  )
}

export default Login
