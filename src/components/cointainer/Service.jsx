import React from 'react';
import { CiMobile3 } from "react-icons/ci";

const services = [
  {
    icons:<CiMobile3 size={40} fill='blue' className="p-2 border border-blue-800 rounded-full mb-3" />,
    title: "Mobile App Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  }, 
  {
    icons:<CiMobile3 size={40} fill='blue' className="p-2 border border-blue-800 rounded-full mb-3" />,    title: "Web Design & Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icons:<CiMobile3 size={40} fill='blue' className="p-2 border border-blue-800 rounded-full mb-3" />,    title: "Software Testing Service",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icons:<CiMobile3 size={40} fill='blue' className="p-2 border border-blue-800 rounded-full mb-3" />,    title: "Software Test",
    description: "A Website is an extension of your self and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  }
];

const ServicesSection = () => {
  return (
    <div className="p-8 bg-[#E7DAED]" >
      <h1 className="text-3xl font-semibold text-center mb-16">Services we offer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className=''>{service.icons}</div>
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;