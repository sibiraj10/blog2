import React from "react";
import HeroImg from "../../assets/Heroimg.png";
import  { Link, useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/fetch"); 
  };


  return (
    <section className="bg-gray-100 py-5 px-6 md:px-32 ">
      <div className="container w-full flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-[40%] text-center flex flex-col gap-5 md:text-left">
          <div>
            <h1 className="text-3xl font-thin leading-relaxed">Great Software is</h1>
            <h1 className="text-4xl font-bold">Build by grate teams</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 ">
            We help build and manage a team of world-class developers to bring your vision to life.
          </p>
          <button onClick={handleNavigation} className="mt-6 px-6 py-3 w-fit bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
            Fetch api! 
        </button>
        </div>

        <div className="md:w-[60%] mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="  rounded-lg p-4">
              <img
                src={HeroImg}
                className="w-[100%] h-[] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
