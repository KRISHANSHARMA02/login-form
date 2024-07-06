"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Form7 = ({ oncontinue }) => {
  const [availability, setAvailability] = useState({
    Monday: [{ from: "09:00", to: "17:00" }],
    Tuesday: [{ from: "09:00", to: "17:00" }],
    Wednesday: [{ from: "09:00", to: "17:00" }],
    Thursday: [{ from: "09:00", to: "17:00" }],
    Friday: [{ from: "09:00", to: "17:00" }],
    Saturday: [{ from: "09:00", to: "17:00" }],
    Sunday: [{ from: "09:00", to: "17:00" }],
  });

  const [hiddenDays, setHiddenDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const handleTimeChange = (day, index, key, value) => {
    const newAvailability = { ...availability };
    newAvailability[day][index][key] = value;
    setAvailability(newAvailability);
  };

  const handleAddSlot = (day) => {
    const newAvailability = { ...availability };
    newAvailability[day].push({ from: "", to: "", isNew: true });
    setAvailability(newAvailability);
  };

  const handleDeleteSlot = (day, index) => {
    const newAvailability = { ...availability };
    newAvailability[day].splice(index, 1);
    setAvailability(newAvailability);
  };

  const handleToggleDay = (day) => {
    const newHiddenDays = { ...hiddenDays };
    newHiddenDays[day] = !newHiddenDays[day];
    setHiddenDays(newHiddenDays);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Availability:", availability);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-4xl bg-white p-8 rounded mt-3">
        <h1 className="text-3xl font-bold mb-8 text-start">Availability</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h1 className="block text-lg font-medium text-black text-start mb-2">
              Set your availability
            </h1>
            <p className="text-sm text-gray-600 mb-4 text-start">
              Availability shows your potential working hours. Students can book
              lessons at these times. Add peak hours to get more students.
            </p>
          </div>
          {Object.keys(availability).map((day) => (
            <div key={day} className="mb-6">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={!hiddenDays[day]}
                  onChange={() => handleToggleDay(day)}
                  className="mr-2 h-5 w-5 border-2 cursor-pointer"
                />
                <label className="block text-lg font-medium text-gray-700">
                  {day}
                </label>
              </div>
              {!hiddenDays[day] && (
                <div>
                  {availability[day].map((slot, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center mb-2">
                      <label className="block text-lg font-medium text-gray-900 mr-2 p-2 sm:mb-0 mb-2 sm:mr-4">
                        From
                      </label>
                      <input
                        type="time"
                        value={slot.from}
                        onChange={(e) =>
                          handleTimeChange(day, index, "from", e.target.value)
                        }
                        className="border-2 border-gray-400 focus:border-black rounded-md shadow-sm focus:ring-blue-500 mb-2 sm:mb-0 p-3 sm:mr-4"
                      />
                      <label className="block text-lg font-medium text-gray-900 mr-2 p-2 sm:mb-0 mb-2 sm:mr-4">
                        To
                      </label>
                      <input
                        type="time"
                        value={slot.to}
                        onChange={(e) =>
                          handleTimeChange(day, index, "to", e.target.value)
                        }
                        className="border-2 border-gray-400 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-black mb-2 sm:mb-0 sm:mr-4"
                      />
                      {slot.isNew && (
                        <button
                          type="button"
                          onClick={() => handleDeleteSlot(day, index)}
                          className="text-red-700 ml-2"
                        >
                          <AiOutlineDelete size={30} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddSlot(day)}
                    className="text-black font-bold underline my-3"
                  >
                    Add another time slot
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={oncontinue}
            className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 mt-7 rounded"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form7;
