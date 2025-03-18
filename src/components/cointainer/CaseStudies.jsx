import React from "react";
import S1 from "../../assets/caseS1.jpeg";
import S2 from "../../assets/casseS2.jpeg";
import S3 from "../../assets/caseS3.jpeg";


const CaseStudies = () => {
  const caseData = [
    {
      title: "Build the right team to scale",
      description:
        "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
      quote:
        "“Software is quick to identify gaps or problems with the software as we decided to expand our scope to build new modules.”",
      author: "Jeena Markson, CEO",
      image: S1,
    },
    {
      title: "Optimize your software delivery",
      description:
        "Streamline your processes with our agile methodologies to deliver software more efficiently. Our expert team ensures smooth transitions, fewer bottlenecks, and rapid deployment.",
      quote:
        "“The team was highly effective in optimizing our delivery pipelines, helping us save both time and resources.”",
      author: "Michael Carter, CTO",
      image: S2,
    },
    {
      title: "Scale seamlessly with our experts",
      description:
        "Whether you're expanding your business or tackling new challenges, we help you scale with confidence. Our professionals integrate with your team to achieve your goals.",
      quote:
        "“Partnering with this team was a game-changer. They helped us scale our operations without compromising quality.”",
      author: "Amelia Sanders, COO",
      image: S3,
    },
  ];

  return (
    <div className="bg-white py-12 px-24">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">
        Way of Building <br />
        <span className="text-black">Great Software</span>
      </h1>
      <div className="space-y-16">
        {caseData.map((caseItem, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
          
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {caseItem.title}
              </h2>
              <p className="text-gray-700 mb-6">{caseItem.description}</p>
              <blockquote className="text-gray-500 italic border-l-4 border-blue-500 pl-4 mb-4">
                {caseItem.quote}
              </blockquote>
              <p className="text-sm font-semibold text-gray-800">
                {caseItem.author}
              </p>
            </div>

          
            <div className="lg:w-1/2">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
