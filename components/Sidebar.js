"use client"
import React from 'react'
import Link from 'next/link';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className='fixed left-0'>
        <div>
        <h1 className='text-2xl ml-5 mt-5 font-bold'>Learn<b className='text-orange-600'>O</b>sphere.in</h1>
      </div>
      <div className='mt-5 ml-5 flex flex-col w-48 border-r-2 h-screen'>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <AiOutlineHome size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/">Home</Link>
          </span>
        </div>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <MdOutlineWatchLater size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/">Number of hour's</Link>
          </span>
        </div>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <PiStudentBold size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/">Number of students</Link>
          </span>
        </div>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <SlCalender size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/Calendar">Calendar</Link>
          </span>
        </div>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <RiMoneyRupeeCircleLine size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/">Payout</Link>
          </span>
        </div>
        <div className='mt-3 p-2 flex items-center hover:bg-orange-500 hover:text-white rounded-md'>
          <FaStarHalfAlt size={20} />
          <span className='pl-2 font-semibold'>
            <Link href="/">Rating</Link>
          </span>
        </div>
  
    </div>
    </div>
  )
}

export default Sidebar;
