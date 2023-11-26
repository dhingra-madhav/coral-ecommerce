import React from "react";
import { FaTimes } from "react-icons/fa";

const LoginCard = ({ onClose }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-96 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>

        {/* Your login form or content goes here */}
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Add your login form fields */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          {/* Add your login button */}
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
