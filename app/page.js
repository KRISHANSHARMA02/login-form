"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'
import { ToastContainer, toast} from 'react-toastify';
import Contact from '@/components/Contact';
import 'react-toastify/dist/ReactToastify.css';
import Register from '@/components/Register';
import Signup from '@/components/Signup';




const page = () => {
const [marks, setmarks] = useState(80)
const notify = () => 
toast.success('🎉Yeah! you changed it', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
 
  });
  return (
    <>
    {/* <Navbar /> */}
    <Signup />



     {/* <div className=' flex justify-center text-center items-center flex-col bg-red-200 '>

<h1 className='text text-xl font-bold'>Hello my marks were {marks} </h1>
<button className='border to-black p-4 bg-blue-300 rounded' onClick={()=>{
  setmarks(33)
  notify()   
}}>Update</button>
<ToastContainer />
</div> */}
        {/* <Contact /> */}
        {/* <Register /> */}
{/* <Teacher /> */}

    </>
  )

}

export default page
