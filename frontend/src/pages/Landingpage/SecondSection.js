import React from "react";
import web3careerlogo from "../../../assets/img/web3careerlogo.png";
import academylogo from "../../../assets/img/academylogo.png";
import web3profilelogo from "../../../assets/img/web3profilelogo.png";

function SecondSection() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="px-[10rem] py-[11rem] text-[#DAFF3E] my-[10rem]">
        <div className="flex flex-row justify-between mb-5">
          <div className="pl-[3rem]">
            <img src={academylogo} alt="" className="w-[150px] h-auto" />
          </div>
          <div className="pl-[2rem]">
            <img src={web3profilelogo} alt="" className="w-[100px] h-auto" />
          </div>
          <div className="pr-[3rem]">
            <img src={web3careerlogo} alt="" className="w-[150px] h-auto" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-4xl font-bold mt-4">Web3 Academy</div>

          <div className="text-4xl font-bold mt-4">Web3 Profile</div>

          <div className="text-4xl font-bold mt-4">Web3 Career</div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
