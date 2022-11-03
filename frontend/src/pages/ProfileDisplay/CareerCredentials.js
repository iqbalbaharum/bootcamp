import React from "react";
import logo from "../../../assets/img/companyLogo.png";
import rec from "../../../assets/img/Rectangle.png";

function Career() {
  return (
    <div className="px-[10rem] mt-10 font-robotoMono pb-10">
      <div className="flex flex-col justify-center px-[6rem]">
        <p className="text-left text-[40px] font-bold">Career Credentials</p>
        <div className="bg-black text-[#DAFF3E] text-left h-[180px] w-[950px] text-xl pl-10 py-6 font-bold rounded-2xl">
          <p>Senior Architect at Google</p>
          <p>Senior Product Lead at Google</p>
          <p>Senior Product Lead at Meta</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-black  rounded-2xl">
            <div className="relative px-3 pt-3">
              <img src={rec} alt="" />
              <div className="absolute -mt-14 ml-2">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="text-[#DAFF3E] text-left px-5 mt-5">
              <p className="font-bold text-[24px]">SEED CERTIFIED DEV</p>
              <p className="font-normal text-[16px]">
                Created a web3 job portal taht implement NFT credential
              </p>
              <p className="font-bold text-[20px] py-4">10-OCT-2022</p>
            </div>
          </div>
          <div className="bg-black  rounded-2xl">
            <div className="relative px-3 pt-3">
              <img src={rec} alt="" />
              <div className="absolute -mt-14 ml-2">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="text-[#DAFF3E] text-left px-5 mt-5">
              <p className="font-bold text-[24px]">SEED CERTIFIED DEV</p>
              <p className="font-normal text-[16px]">
                Created a web3 job portal taht implement NFT credential
              </p>
              <p className="font-bold text-[20px] py-4">10-OCT-2022</p>
            </div>
          </div>
          <div className="bg-black  rounded-2xl">
            <div className="relative px-3 pt-3">
              <img src={rec} alt="" />
              <div className="absolute -mt-14 ml-2">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="text-[#DAFF3E] text-left px-5 mt-5">
              <p className="font-bold text-[24px]">SEED CERTIFIED DEV</p>
              <p className="font-normal text-[16px]">
                Created a web3 job portal taht implement NFT credential
              </p>
              <p className="font-bold text-[20px] py-4">10-OCT-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
