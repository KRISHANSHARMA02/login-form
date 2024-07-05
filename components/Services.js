import React from "react";
import Image from "next/image";
import Robot from "@/public/Robot.jpg";

import Homeclass from "@/public/Homeclass.jpg";

import { IoRemoveOutline } from "react-icons/io5";

const Services = () => {
  const Services = [
    {
      id: 1,
      src: Homeclass,
      heading: "Teachers on Call",
      para: "Personalized learning experiences brought to your doorstep.",
    },
    {
      id: 2,
      src: Robot ,
      heading: "AI & Robotics",
      para: "Learn to code with our expert mentors and build your own projects.",
      
    },
    
  ];

  return (
    <div name="services">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold pt-8 ">SERVICES</h1>
        <p className="text-xl pt-1 pl-[4.75rem] sm:pl-0 md:pl-0">
          Offerings to support every learning need.
        </p>
        <IoRemoveOutline size={70} />
      </div>
      <div className="flex gap-2 justify-center items-center flex-col sm:flex-row md:flex-row bg-white">
        {Services.map(({id,src,heading,para}) => (
           <div className="rounded-md relative m-8 cursor-pointer h-[300px] w-[300px] transition-all ease-in-out duration-500 transform hover:scale-105 sm:w-80 sm:h-80">
           <div className="group relative rounded-md border">
             <Image
               key={id}
               src={src}
               alt="Picture of the author"
              
               className="object-cover h-[300px] w-[400px] rounded-md transition-all ease-in-out duration-500 opacity-80 group-hover:opacity-50"
             />
             <h1 className="text-2xl font-bold absolute p-2 top-1/3 opacity-100 group-hover:opacity-0 right-[20%]  border-none rounded-xl bg-gray-800 text-white ">{heading}</h1>
             <h1 className="text-2xl font-bold absolute top-1/3  p-1 sm:p-2 sm:pl-7 sm:pr-7 pl-4 pr-4 transition-all transform ease-in-out opacity-0 -translate-y-16 duration-300 sm: group-hover:translate-y-1 group-hover:opacity-100">
              {heading}
             </h1>
             <p className="text-l font-bold absolute top-1/2  p-1 sm:p-2 sm:pl-7 sm:pr-7 pl-4 pr-4 transition-all transform ease-in-out opacity-0 translate-y-16 duration-300 sm: group-hover:-translate-y-1 group-hover:opacity-100">
              {para}
             </p>
           </div>
         </div>
        ))}
       
         
        
      </div>
    </div>
  );
};
export default Services;
