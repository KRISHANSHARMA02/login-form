"use client";
import React, { useState } from 'react';

const Form3 = ({ formData, onDataChange, onContinue }) => {
  const [educations, setEducations] = useState([{ ...formData }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    setEducations(newEducations);
    onDataChange(newEducations);
  };

  const handleAddEducation = () => {
    setEducations([...educations, { university: '', degree: '', degreeType: '', major: '', startYear: '', endYear: '', certificate: null }]);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const newEducations = [...educations];
    newEducations[index].certificate = file;
    setEducations(newEducations);
    onDataChange(newEducations);
  };

  const yearOptions = Array.from({ length: 50 }, (_, i) => {
    const year = 1980 + i;
    return <option key={year} value={year}>{year}</option>;
  });

  return (
    <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded">
      <h1 className="text-2xl font-bold mb-4 text-start">Education Details</h1>
      <p className="my-4 mb-8 text-start">Add your educational background.</p>
      {educations.map((education, index) => (
        <form key={index} className="mb-8">
          <div className="relative mb-5">
            <input
              type="text"
              name="university"
              value={education.university}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              placeholder=" "
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              University
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              placeholder=" "
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Degree
            </label>
          </div>

          <div className="relative mb-5">
            <select
              name="degreeType"
              value={education.degreeType}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">Select Degree Type</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Degree Type
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="text"
              name="major"
              value={education.major}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              placeholder=" "
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Specialization
            </label>
          </div>

          <div className="relative mb-5">
            <select
              name="startYear"
              value={education.startYear}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">Start Year</option>
              {yearOptions}
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Start Year
            </label>
          </div>

          <div className="relative mb-5">
            <select
              name="endYear"
              value={education.endYear}
              onChange={(e) => handleInputChange(index, e)}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
            >
              <option value="">End Year</option>
              {yearOptions}
            </select>
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              End Year
            </label>
          </div>

          <div className="relative mb-5 ">
            <input
              type="file"
              onChange={(e) => handleFileChange(index, e)}
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5 "
            />
            <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
              Upload Certificate
            </label>
          </div>
        </form>
      ))}

      <button
        type="button"
        onClick={handleAddEducation}
        className="mb-4 w-full border-none underline decoration-2 text-start font-bold"
      >
        Add Another Education
      </button>
      <button
        type="button"
        onClick={onContinue}
        className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 rounded"
      >
        Save and Continue
      </button>
    </div>
  );
};

export default Form3;
