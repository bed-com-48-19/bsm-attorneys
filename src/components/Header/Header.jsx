import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'; // Adjust the path to your logo image

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="w-screen h-20 z-10 bg-gradient-to-r from-indigo-600 to-blue-500 fixed shadow-lg">
      <div className="px-6 flex justify-between items-center w-full h-full">
        {/* Logo and Title (Medium and Large Screens) */}
        <div className="hidden md:flex items-center">
          <img src={Logo} alt="Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">BSM ATTORNEYS</h1>
        </div>

        {/* Logo Only (Mobile View) */}
        <div className="md:hidden">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Navigation Links (Medium and Large Screens) */}
        <ul className="hidden md:flex ml-10 space-x-8">
          <li className="text-white hover:text-gray-300 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Sign In Button (Medium and Large Screens) */}
        <div className="hidden md:flex">
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Sign In</button>
        </div>

        {/* Mobile Menu Icon */}
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
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">
          <Link to="/" onClick={toggleNav}>Home</Link>
        </li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">
          <Link to="/about" onClick={toggleNav}>About</Link>
        </li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">
          <Link to="/services" onClick={toggleNav}>Services</Link>
        </li>
        <li className="text-white py-4 text-center border-b-2 border-gray-600 w-full hover:text-gray-300 transition duration-300">
          <Link to="/contact" onClick={toggleNav}>Contact</Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-white text-indigo-600 px-8 py-3 mb-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
