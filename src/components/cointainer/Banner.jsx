import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center py-20 px-24 mx-28 my-24  bg-[#E4ECF7]  rounded-lg ">
      <p className="text-4xl w-1/2 font-bold text-gray-800">
        Hire the best developers and designers around!
      </p>
      <button className=" w-fit  bg-gradient-to-r from-orange-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transform transition-transform hover:-translate-y-1">
        Hire Top Developers
      </button>
    </div>
  );
};

export default Banner;
