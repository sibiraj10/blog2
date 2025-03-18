import React from "react";
import Footerimg from "../assets/footer.png"
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
         <img src={Logo}  alt="" />
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex items-center ">
           <img src={Footerimg}  className=" w-1/2 h-18 " alt="" />
          </div>
        </div>

   
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-purple-600">About Us</a></li>
            <li><a href="#services" className="hover:text-purple-600">Services</a></li>
            <li><a href="#case-studies" className="hover:text-purple-600">Case Studies</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-600">How it Works</a></li>
            <li><a href="#blog" className="hover:text-purple-600">Blog</a></li>
            <li><a href="#careers" className="hover:text-purple-600">Careers</a></li>
            <li><a href="#areas-we-serve" className="hover:text-purple-600">Areas We Serve</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="font-bold text-gray-800 mb-4">+908 89097 890</p>
          <div className="flex space-x-4">
          
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        © 2023 Copyright by Agency Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
