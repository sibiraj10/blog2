import React from "react";

const Development = () => {
  const steps = [
    {
      number: "#1",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.",
    },
    {
      number: "#2",
      title: "Sprint planning",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      number: "#3",
      title: "Tech architecture",
      description:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      number: "#4",
      title: "Standups & weekly demos",
      description:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      number: "#5",
      title: "Code reviews",
      description:
        "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
    },
    {
      number: "#6",
      title: "Iterative delivery",
      description:
        "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-thin text-center mb-12">
        How development <br/>
        <span className="text-black font-bold">through Alcaline works</span> 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-pink-500 mb-2">
              {step.number}
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              {step.title}
            </h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
