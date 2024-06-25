import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="w-screen h-20 z-10 bg-gradient-to-r from-indigo-600 to-blue-500 fixed shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white mr-4 sm:text-4xl">BSM ATTORNEYS</h1>
          <ul className="hidden md:flex ml-10 space-x-8">
            <li className="text-white hover:text-gray-300 transition duration-300">Home</li>
            <li className="text-white hover:text-gray-300 transition duration-300">About</li>
            <li className="text-white hover:text-gray-300 transition duration-300">Services</li>
            <li className="text-white hover:text-gray-300 transition duration-300">Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Sign In</button>
        </div>
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? (
            <XMarkIcon className="w-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul className={`absolute top-20 md:hidden ${navOpen ? 'block' : 'hidden'} bg-gradient-to-r from-indigo-600 to-blue-500 w-full px-8`}>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">Home</li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">About</li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">Services</li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">Contact</li>
        <div className="flex flex-col my-4">
          <button className="bg-white text-indigo-600 px-8 py-3 mb-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
