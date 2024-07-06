"use client"
import React, { useState } from 'react';

const TeacherCertificationForm = ({oncontinue}) => {
  const [certifications, setCertifications] = useState([
    { language: '', details: '', issuedBy: '', year: '', file: null },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newCertifications = [...certifications];
    newCertifications[index][name] = value;
    setCertifications(newCertifications);
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const newCertifications = [...certifications];
    newCertifications[index].file = file;
    setCertifications(newCertifications);
  };

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      { language: '', details: '', issuedBy: '', year: '', file: null },
    ]);
  };

  const handleSaveAndContinue = () => {
    // Implement save logic
    console.log('Certifications:', certifications);
    oncontinue();
  };

  return (
    <div className="flex flex-col items-center py-4 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded">
        <h1 className="text-2xl font-bold mb-4 text-start">Teacher Certification</h1>
        <p className="my-4 mb-8 text-start">
          Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students.
        </p>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <div className="relative mb-5">
              <select
                id={`language-${index}`}
                name="language"
                value={cert.language}
                onChange={(event) => handleInputChange(index, event)}
                className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
                style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
              <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
                Choose Language
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="text"
                id={`details-${index}`}
                name="details"
                value={cert.details}
                onChange={(event) => handleInputChange(index, event)}
                className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
                placeholder=" "
                style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              />
              <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
                Certificate Details
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="text"
                id={`issuedBy-${index}`}
                name="issuedBy"
                value={cert.issuedBy}
                onChange={(event) => handleInputChange(index, event)}
                className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
                placeholder=" "
                style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              />
              <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
                Issued By
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="text"
                id={`year-${index}`}
                name="year"
                value={cert.year}
                onChange={(event) => handleInputChange(index, event)}
                className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
                placeholder=" "
                style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              />
              <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
                Year of Certification
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="file"
                id={`file-${index}`}
                name="file"
                accept="application/pdf"
                onChange={(event) => handleFileChange(index, event)}
                className="block w-full border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-500 peer bg-transparent py-2.5"
                style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              />
              <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-3 peer-focus:scale-75 peer-focus:text-blue-500">
                Upload Certificate PDF
              </label>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddCertification}
          className="mb-4 w-full border-none underline decoration-2 text-start font-bold"
        >
          Add another Certification
        </button>
        <button
          type="button"
          onClick={handleSaveAndContinue}
          className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 rounded"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default TeacherCertificationForm;
