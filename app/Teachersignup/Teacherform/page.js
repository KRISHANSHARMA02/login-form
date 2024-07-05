"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdCheckBox } from "react-icons/md";
import user from "@/public/User.svg";
import Form1 from "./Form1/page";
import Form2 from "./Form2/page";
import Form3 from "./Form3/page";
import Form4 from "./Form4/page";
import Form5 from "./Form5/page";
import Form6 from "./Form6/page";
import Form7 from "./Form7/page";
import Form8 from "./Form8/page";

const Layout = ({ children }) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    subject: "",
    language: "",
    mobileNumber: "",
    profileImage: null,
    school: "",
    degree: "",
    major: "",
  });

  const handleFormSwitch = (formId) => {
    setCurrentForm(formId);
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const steps = [
    {
      id: 1,
      title: "About",
      status: currentForm > 1 ? "completed" : "current",
      icon:
        currentForm > 1 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 2,
      title: "Photo",
      status: currentForm > 2 ? "completed" : "current",
      icon:
        currentForm > 2 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 3,
      title: "Education",
      status: currentForm > 3 ? "completed" : "current",
      icon:
        currentForm > 3 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 4,
      title: "Certification",
      status: currentForm > 4 ? "completed" : "current",
      icon:
        currentForm > 4 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 5,
      title: "Experience",
      status: currentForm > 5 ? "completed" : "current",
      icon:
        currentForm > 5 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 6,
      title: "Video",
      status: currentForm > 6 ? "completed" : "current",
      icon:
        currentForm > 6 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 7,
      title: "Availability",
      status: currentForm > 7 ? "completed" : "current",
      icon:
        currentForm > 7 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
    {
      id: 8,
      title: "Pricing",
      status: currentForm > 8 ? "completed" : "current",
      icon:
        currentForm > 8 ? (
          <MdCheckBox size={25} className="text-orange-600" />
        ) : (
          <MdKeyboardArrowRight />
        ),
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    // Example: redirect to logout endpoint or clear session
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
          <span className="ml-2 text-xl font-semibold text-gray-800">Learn<b className="text-orange-600">O</b>sphere.in</span>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <Image
              src={user}
              height={50}
              width={50}
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer"
            />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="flex bg-white shadow-md gap-2 items-center justify-center flex-wrap p-2 px-2 my-4 rounded-md">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-3 flex flex-row items-center gap-3 cursor-pointer"
            onClick={() => handleFormSwitch(step.id)}
          >
            <p className="text-sm sm:text-base font-bold text-gray-700">
              {step.id}
            </p>
            <p className="hidden sm:block text-sm sm:text-base text-gray-700">
              {step.title}
            </p>
            <p>{step.icon}</p>
          </div>
        ))}
      </div>

      <div className="flex-grow flex justify-center">
        <div className="w-full max-w-2xl p-3 mt-12 mx-4 bg-white rounded-md shadow-lg">
          {currentForm === 1 && (
            <Form1
              formData={formData}
              onDataChange={handleFormDataChange}
              onContinue={() => handleFormSwitch(2)}
            />
          )}
          {currentForm === 2 && (
            <Form2
              formData={formData}
              onDataChange={handleFormDataChange}
              onContinue={() => handleFormSwitch(3)}
            />
          )}
          {currentForm === 3 && (
            <Form3
              formData={formData}
              onDataChange={handleFormDataChange}
              onContinue={() => handleFormSwitch(4)}
            />
          )}
          {currentForm === 4 && (
            <Form4
              formData={formData}
              onDataChange={handleFormDataChange}
              oncontinue={() => handleFormSwitch(5)}
            />
          )}
          {currentForm === 5 && (
            <Form5
              formData={formData}
              onDataChange={handleFormDataChange}
              oncontinue={() => handleFormSwitch(6)}
            />
          )}
          {currentForm === 6 && (
            <Form6
              formData={formData}
              onDataChange={handleFormDataChange}
              oncontinue={() => handleFormSwitch(7)}
            />
          )}
          {currentForm === 7 && (
            <Form7
              formData={formData}
              onDataChange={handleFormDataChange}
              oncontinue={() => handleFormSwitch(8)}
            />
          )}
          {currentForm === 8 && (
            <Form8 formData={formData} onDataChange={handleFormDataChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
