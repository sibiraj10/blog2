import React from "react";
import F1 from '../../assets/f1.jpeg'
import F5 from '../../assets/f5.jpeg'
import F4 from '../../assets/f4.jpeg'
import F3 from '../../assets/f3.jpeg'
import F2 from '../../assets/f2.jpeg'
const Feature = () => {
  const blogs = [
    {
      id: 1,
      image: F1,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 2,
      image: F2,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 3,
      image: F3,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 4,
      image: F4,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 5,
      image: F5,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
  ];

  return (
    <div className=" py-12 ">
     
      <h2 className="text-center text-2xl font-thin text-gray-800 mb-8">
        Featured <br/> <span className="text-black font-bold">Blogs</span>
      </h2>

    
      <div className="flex flex-wrap justify-between w-full gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white  rounded-lg overflow-hidden w-64 p-4 hover:shadow-lg transition-shadow"
          >
           
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg"
            />

           
            <h3 className="mt-4 text-base font-semibold text-gray-800">
              {blog.title}
            </h3>

           
            <a
              href="#"
              className="mt-2  text-purple-600 font-medium text-right hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
