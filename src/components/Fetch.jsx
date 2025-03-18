import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
    
        setPosts(data.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  if (posts.length === 0) {
    return <div className="text-center text-gray-500">Loading posts...</div>;
  }

  return (
    <div className="w-full my-24 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
   
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {posts[currentIndex].title}
        </h2>
        <p className="text-gray-600 mb-6">{posts[currentIndex].body}</p>

      
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
