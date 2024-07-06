"use client";
import React from 'react';

const Form1 = ({ formData = {}, onDataChange, onContinue }) => {
  const nationalities = ["Indian", "American", "Canadian", "British"];
  const languages = ["English", "Hindi", "Spanish", "French"];
  const subjects = ["Mathematics", "Science", "History", "Geography"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onDataChange({ [name]: value });
  };

  const openForm = () => {
    onContinue();
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded">
      <h1 className="text-2xl font-bold mb-4 text-start">About</h1>
      <p className="my-4 mb-8 text-start">
        Start creating your public tutor profile. Your progress will be automatically saved as you complete each section. You can return at any time to finish your registration.
      </p>
      <form>
        <div className="relative mb-5">
          <input
            type="text"
            name="firstname"
            value={formData.firstname || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            placeholder=" "
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          />
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            First Name
          </label>
        </div>

        <div className="relative mb-5">
          <input
            type="text"
            name="lastname"
            value={formData.lastname || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            placeholder=" "
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          />
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Last Name
          </label>
        </div>

        <div className="relative mb-5">
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            placeholder=" "
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          />
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Email
          </label>
        </div>

        <div className="relative mb-5">
          <select
            name="nationality"
            value={formData.nationality || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          >
            <option value="" disabled hidden></option>
            {nationalities.map((nationality, index) => (
              <option key={index} value={nationality}>{nationality}</option>
            ))}
          </select>
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Nationality
          </label>
        </div>

        <div className="relative mb-7">
          <select
            name="subject"
            value={formData.subject || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          >
            <option value="" disabled hidden></option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Subject you teach
          </label>
        </div>

        <div className="relative mb-7">
          <select
            name="language"
            value={formData.language || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          >
            <option value="" disabled hidden></option>
            {languages.map((language, index) => (
              <option key={index} value={language}>{language}</option>
            ))}
          </select>
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Language you speak
          </label>
        </div>

        <div className="relative mb-7">
          <input
            type="tel"
            name="mobilenumber"
            value={formData.mobilenumber || ""}
            onChange={handleInputChange}
            className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
            placeholder=" "
            style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
          />
          <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
            Mobile Number
          </label>
        </div>

        <button
          type="button"
          onClick={openForm}
          className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 rounded"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default Form1;

