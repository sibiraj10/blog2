import React from "react";
import L1 from '../../assets/logo1.png'
import L2 from '../../assets/logo2.png'
import L3 from '../../assets/logo3.png'
// import L4 from '../../assets/logo4.png'
import L5 from '../../assets/logo5.png'
import L6 from '../../assets/logo6.png'

const LogoSection = () => {
  return (
    <div className="bg-[#F7F7FA] py-14 px-4">
      <div className="flex justify-around items-center flex-wrap gap-8">

        <div className="flex flex-col items-center">
          <img src={L1} alt="SAMPATH CREAM HOUSE" className="h-14" />
        </div>

  
        <div className="flex flex-col items-center">
        <img src={L2} alt="SAMPATH CREAM HOUSE" className="h-14" />
        </div>

       
        <div className="flex flex-col items-center">
           <img src={L3} alt="SAMPATH CREAM HOUSE" className="h-14" />
         
        </div>

    
          {/* <div className="flex flex-col items-center">
          <img src={L4} alt="SAMPATH CREAM HOUSE" className="h-14" />        
          </div> */}

        
        <div className="flex flex-col items-center">
        <img src={L5} alt="SAMPATH CREAM HOUSE" className="h-14" />         
        </div>

      
        <div className="flex flex-col items-center">
        <img src={L6} alt="SAMPATH CREAM HOUSE" className="h-14" />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
