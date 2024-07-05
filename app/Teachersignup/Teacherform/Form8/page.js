import React, { useState } from 'react';

const Form8 = () => {
  const [baseRate, setBaseRate] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values and ensure they are in INR format
    if (/^\d*\.?\d*$/.test(value)) {
      setBaseRate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., send data to a server)
    console.log('Base Rate Submitted: ', baseRate);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Set your hourly base rate</h2>
      <p className="mb-4">
        To get more students to your profile, we recommend a base price of ₹500 per hour for new tutors in your subject and with your experience level.
      </p>
      <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="baseRate">
            Price in INR only
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-700">₹</span>
            <input
              type="text"
              id="baseRate"
              name="baseRate"
              value={baseRate}
              onChange={handleInputChange}
              style={{ outline: 'none', borderBottomWidth: '2px', borderBottomColor: '#3182ce' }}
              placeholder="Enter your hourly base rate"
              className="shadow appearance-none border rounded w-full py-2 pl-8 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-6 text-gray-600 text-sm">
          Change your base rate in settings after approval.
        </div>
    
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-500 text-white w-full mt-7 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Complete Registration
          </button>
       
      </form>
    </div>
  );
};

export default Form8;

