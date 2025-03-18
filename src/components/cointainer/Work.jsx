import React from 'react';
import W1 from '../../assets/work1.png'
import W2 from '../../assets/work2.png'
import W3 from '../../assets/work3.png'
import W4 from '../../assets/work4.png'
import W5 from '../../assets/work5.png'

const Work = () => {
  // Array of customer details
  const customers = [
    { name: "Romeena De Silva", company: "Joint Cosmetics",img:W1 },
    { name: "Romeena De Silva", company: "Joint Cosmetics",img:W2 },
    { name: "Romeena De Silva", company: "Joint Cosmetics",img:W3 },
    { name: "Romeena De Silva", company: "Joint Cosmetics",img:W4 },
    { name: "Romeena De Silva", company: "Joint Cosmetics",img:W5 },

  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl font-thin mb-8 leading-tight">Why customers love <br/> <span className='font-bold'>Work with us</span></h1>
        <p className="text-gray-600 w-1/2  mb-8">
          Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.
        </p>

        <div className=" flex gap-6 w-full justify-center">
         
          {customers.map((customer, index) => (
            <div key={index} className=" p-6  rounded-full  flex flex-col gap-2  items-center">
              <img src={customer.img} className='w-16 rounded-full h-16'/>
              <h3 className="text-xs text-[#57007B] font-semibold">{customer.name}</h3>
              <p className= " text-xs text-gray-600">{customer.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;