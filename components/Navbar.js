"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <nav className="border-transparent fixed top-0 z-50 w-full dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex-shrink-0">
            <Link className="text-white text-[1rem] md:text-2xl font-bold" href="/">
              Learn<b className="text-orange-600 text-2xl">O</b>sphere.in
            </Link>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex flex-col md:flex-row gap-2">
              <Link href="/Teachersignup
              " className="bg-orange-600 text-white font-bold px-4 py-1 rounded-md mr-2 sm:mr-4 md:mr-4 hover:bg-orange-500">
                Sign in
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/About' },
                { label: 'Services', path: '/' }, // Add a path for the Services dropdown if needed
                { label: 'Contact', path: '/contact' },
                { label: 'Blogs', path: '/' }, // Add a path for the Blogs dropdown if needed
              ].map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.path}
                    onClick={() => handleItemClick(item.label)}
                    className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeItem === item.label ? 'text-orange-600 md:text-orange-700 md:dark:text-orange-500' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index === 2 && (
                    <div className="absolute left-0 mt-2 bg-gray-900 shadow-lg py-2 w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href="/Signin" className="block px-4 py-2 text-xl text-white font-semibold hover:text-orange-100">
                        Prepare for your exam with us
                      </Link>
                      <div className="px-4 py-2">
                        <Link href="/" className="block py-2 text-white font-semibold hover:text-orange-100">
                          Cbse Board Exams(10th & 12th)
                        </Link>
                        <Link
                      className="block py-2 text-white font-semibold hover:text-orange-100"
                      href=" "
                    >
                     Class 6th to 9th
                    </Link>
                    <Link 
                      className="block py-2 text-white font-semibold hover:text-orange-100"
                      href=" "
                      
                    >
                     Olympiad Exams(All categories available)
                    </Link>
                    <Link
                      className="block py-2 text-white font-semibold hover:text-orange-100"
                      href=" "
                    >
                      Novodaya Vidyalaya Entrance Exam
                    </Link>
                    <Link
                      className="block py-2 text-white font-semibold hover:text-orange-100"
                      href=" "
                    >
                     Sainik School Entrance Exam
                    </Link>
                    <Link
                      className="block py-2 text-white font-semibold hover:text-orange-100"
                      href=" "
                    >
                     Government Exams(UPSC,SSC,Banking and more)

                    </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;