import React from "react";
import CA1 from '../../assets/ca1.png'
import CA2 from '../../assets/ca2.png'
import CA3 from '../../assets/ca3.png'
import CA4 from '../../assets/ca4.png'
import CA5 from '../../assets/ca5.png'
import CA6 from '../../assets/ca6.png'

const CaseApproach = () => {
  const sections = [
    {
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX-first development company. Projects are driven by designers to ensure design and experiences translate to code.",
      icon: CA1,
      bacground:"bg-black"
    },
    {
      title: "Developing Shared Understanding",
      description:
        "Our team works collaboratively to build a shared understanding that aligns with your goals and vision for the project.",
      icon: CA2, 
      bacground:"bg-blue-500"
    },
    {
      title: "Proven Experience and Expertise",
      description:
        "With years of experience, we bring proven expertise to deliver high-quality projects that exceed expectations.",
      icon: CA3, 
      bacground:"bg-orange-500"
    },
    {
      title: "Security & Intellectual Property (IP)",
      description:
        "Your security and intellectual property are our top priorities. We ensure robust measures for data protection.",
      icon: CA4,
      bacground:"bg-green-200"
    },
    {
      title: "Code Reviews",
      description:
        "Our developers conduct regular code reviews to maintain high-quality standards and ensure best practices.",
      icon: CA5, 
      bacground:"bg-green-500"
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "We perform thorough quality assurance and testing to deliver bug-free, reliable software.",
      icon: CA6, 
      bacground:"bg-pink-500"
    },
  ];

  return (
    <div className="bg-[#F7F7FA] py-12 px-24">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">
        Our Design and <br /> Development Approach
      </h1>

      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white border-[#E7DAED]  border p-10  flex justify-center  gap-5"
          >
            
           <div className="1/3"> <img className={`${section.bacground} w-[60px] p-2  rounded object-center`} src={section.icon}/></div>

          
            <div className="1/1"><h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>

            
            <p className="text-gray-600 text-sm">{section.description}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseApproach;
