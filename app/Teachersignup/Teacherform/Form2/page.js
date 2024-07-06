"use client";
import React, { useState, useEffect } from "react";

const Form2 = ({ formData, onDataChange, onContinue }) => {
  const [selectedFile, setSelectedFile] = useState(formData?.profileImage || null);

  useEffect(() => {
    if (formData && formData.profileImage) {
      setSelectedFile(formData.profileImage);
    }
  }, [formData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onDataChange({ profileImage: file });
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-start text-gray-800">
          Upload Profile Image
        </h1>
        <p className="text-gray-600 mb-8 text-start">
          Choose a photo that will help learners get to know you.
        </p>
        <form>
          <div className="relative mb-8">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="block w-full text-sm text-gray-700 bg-blue-50 border border-blue-300 py-2 px-4 rounded-full text-center cursor-pointer hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              {selectedFile ? "Upload New Image" : "Upload Image"}
            </label>
          </div>
          {selectedFile && (
            <div className="mb-8">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Profile Preview"
                className="h-32 w-32 object-cover rounded-full mx-auto shadow-md"
              />
            </div>
          )}
          <div className="text-start mb-8">
            <h2 className="font-bold mb-4 text-gray-800">
              What your photo needs
            </h2>
            <ul className="text-gray-600">
              {[
                "You should be facing forward",
                "Frame your head and shoulders",
                "You should be centered and upright",
                "Your face and eyes should be visible (except for religious reasons)",
                "You should be the only person in the photo",
                "Use a color photo with high resolution and no filters",
                "Avoid logos or contact information",
              ].map((text, index) => (
                <li key={index} className="flex items-start mb-2">
                  <svg
                    className="h-6 w-6 text-green-600 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={handleContinue}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded font-semibold transition"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
