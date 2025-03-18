import React from "react";
import T1 from '../../assets/t1.png'
import T2 from '../../assets/t2.png'
import T3 from '../../assets/t3.png'
import T4 from '../../assets/t4.png'
import T5 from '../../assets/t5.png'
import T6 from '../../assets/t6.png'
import T7 from '../../assets/t7.png'

const TechStack = () => {
  const categories = ["Backend", "Frontend", "Databases", "CMS", "CloudTesting", "DevOps"];

  const technologies = [
    { name: "Node.js", logo: T1 },
    { name: "PHP", logo: T2 },
    { name: "MySQL", logo: T3 },
    { name: "Java", logo: T4 },
    { name: ".NET Core", logo: T5 },
    { name: "Python", logo: T6 },
    { name: "Ruby on Rails", logo: T7 },
    { name: "Go", logo: T4 },
    
  ];

  return (
    <div className="bg-gray-50 py-12 px-24">
     
      <h1 className="text-center text-3xl font-thin text-gray-800 mb-8">Our  <br /><span className="text-3xl font-bold">Tech Stack</span></h1>

      
      <div className="flex justify-center space-x-6 mb-8 ">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`text-gray-600 font-medium px-4 py-2 rounded-full cursor-pointer hover:text-pink-600 `}
          >
            {category}
          </span>
        ))}
      </div>

      
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center text-center  p-4 rounded-lg"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-[140px] h-20 object-contain mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
