import React from "react";
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white  rounded-md shadow-md px-7">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-fit mr-2" />
        </div>
        

        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
          <Link to="#about" className="text-gray-700 hover:text-blue-900">About us</Link>
          <Link to="#services" className="text-gray-700 hover:text-blue-900">Services</Link>
          <Link to="#case-studies" className="text-gray-700 hover:text-blue-900">Case Studies</Link>
          <Link to="#blog" className="text-gray-700 hover:text-blue-900">Blog</Link>
          <Link to="#how-it-works" className="text-gray-700 hover:text-blue-900">How it Works</Link>
          <Link to="#hire" className="text-gray-700 hover:text-blue-900">Hire</Link>
        </nav>
        
    
        <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-2 rounded-md">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
