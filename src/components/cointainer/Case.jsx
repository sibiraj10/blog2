import React from "react";
import C1 from "../../assets/case1.jpeg";
import C2 from "../../assets/case2.jpeg";
import C3 from "../../assets/case3.jpeg";

const Case = () => {
  const cases = [
    {
      img: C1,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics sectors. Its meteoric rise stems out of a solid foundation. The management boasts over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      img: C2,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics sectors. Its meteoric rise stems out of a solid foundation. The management boasts over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
    {
      img: C3,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics sectors. Its meteoric rise stems out of a solid foundation. The management boasts over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    },
  ];

  return (
    <div className="bg-[#F7F7FA] py-16 px-24 ">
    
      <div className="text-center mb-12">
        <h1 className="text-xl font-light text-gray-600">
          Our Recent <br />
          <span className="font-bold text-gray-800 text-3xl">Case Studies</span>
        </h1>
      </div>

     
      <div className="flex md:flex-col gap-8  md:flex-wrap md:justify-between">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden  flex "
          >
      
            <div className="h-56 w-1/2">
              <img
                src={item.img}
                alt={`Case Study ${index + 1}`}
                className="h-full w-full object-center"
              />
            </div>

         
            <div className="p-6 flex flex-col flex-1 w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-rose-500 font-medium hover:underline mt-auto"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-12">
        <a
          href="#"
          className="text-rose-500 text-lg font-medium hover:underline"
        >
          Read more case studies
        </a>
      </div>
    </div>
  );
};

export default Case;
