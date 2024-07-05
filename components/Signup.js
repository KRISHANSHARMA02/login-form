import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex bg-gray-200 items-center justify-center h-screen">
      <Link
        href="/Teachersignup"
        className="group relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden"
      >
        <span className="absolute w-12 h-12 bg-violet-500 rounded-full blur-lg top-1 right-1 z-10 transition duration-500 group-hover:box-shadow-lg"></span>
        <span className="absolute w-20 h-20 bg-rose-300 rounded-full blur-lg top-3 right-8 z-10 transition duration-500 group-hover:right-12 group-hover:-bottom-8"></span>
        Start your registration
      </Link>
    </div>
  );
};

export default Signup;
