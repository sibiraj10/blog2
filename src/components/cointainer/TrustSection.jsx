import React from "react";
import TrustImg from "../../assets/trust.png"

const TrustSection = () => {
  return (
    <div className="w-full  bg-gray-50 p-8 flex flex-col px-28 ">
   
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
            Leading companies trust us to <br />
            <span className="text-purple-600">develop software</span>
          </h2>
          <p className="text-gray-700 mb-4">
            We add <span className="text-purple-600 font-semibold">development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
          </p>
          <a href="#" className="text-purple-600 font-medium hover:underline">
            See more Informations
          </a>
        </div>

        <div className="md:w-1/2 p-6 flex justify-center">
          <div className="relative">
           
            <img
              src={TrustImg}
              alt="Team working"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-12 text-start">
        <h2 className="text-3xl font-bold text-gray-800 leading-snug">
          Meet the People <br />
          <span className="text-purple-600">We are Working With</span>
        </h2>
      </div>
    </div>
  );
};

export default TrustSection;
