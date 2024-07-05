"use client";
import React from "react";

const Form5 = ({ oncontinue }) => {
  const yearOptions = Array.from({ length: 50 }, (_, i) => {
    const year = 1980 + i;
    return <option key={year} value={year}>{year}</option>;
  });

  return (
    <div className="flex justify-center items-center py-4 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-md bg-white p-8 rounded">
        <h1 className="text-2xl font-bold mb-4 text-start">Experience Details</h1>
        <p className="my-4 mb-8 text-start">Add your work experience.</p>
        <form>
          <div className="relative mb-5"> 
            <input
              type="text"
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              placeholder=" "
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Subjects Taught
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="text"
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              placeholder=" "
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Classes Taught
            </label>
          </div>

          <div className="relative mb-5">
            <select
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">Select Years of Experience</option>
              {Array.from({ length: 40 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1} {i + 1 === 1 ? 'Year' : 'Years'}</option>
              ))}
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Years of Experience
            </label>
          </div>

          <div className="relative mb-5">
            <select
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">From Year</option>
              {yearOptions}
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              From
            </label>
          </div>

          <div className="relative mb-5">
            <select
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">To Year</option>
              {yearOptions}
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              To
            </label>
          </div>

          <button
            type="button"
            onClick={oncontinue}
            className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 rounded mt-7"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form5;
