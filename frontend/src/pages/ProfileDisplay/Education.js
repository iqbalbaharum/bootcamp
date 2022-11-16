import React from "react";
import logo from "../../../assets/img/companyLogo.png";
import rec from "../../../assets/img/Rectangle.png";

export default function Education(badge) {
  // return (
  //   <div className="sm:mx-[2rem]">
  //     <div className="sm:text-2xl text-left font-bold text-xl">Education</div>
  //     <div className="text-left block sm:px-[4rem] sm:py-[3rem] mt-4 px-[2rem] py-[1rem] text-[#DAFF3E] bg-black rounded-[20px] focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
  //       <ul className="text-left font-bold sm:text-xl max-w-2xl text-[1.8vh]">
  //         <li>Senior Architect at Google</li>
  //         <li>Senior Architect at Google</li>
  //         <li>Senior Architect at Google</li>
  //       </ul>
  //     </div>
  //     {/* <div className="grid sm:grid-cols-3 gap-3 mt-8 grid-cols-2">
  //       <div className="bg-black  rounded-2xl ">
  //         <div className="relative sm:px-3 px-2 pt-3">
  //           <img className="" src={rec} alt="" />
  //           <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">
  //             <img src={logo} alt="" />
  //           </div>
  //         </div>
  //         <div className="text-[#DAFF3E] text-left sm:px-5 mt-5 px-2">
  //           <p className="font-bold sm:text-xl text-[1.2vh]">{badge.name}</p>
  //           <p className="font-normal sm:text-base text-xs text-[1vh] mt-1">
  //             Created a web3 job portal that implement NFT credential
  //           </p>
  //           <p className="font-bold sm:text-lg text-[1vh] py-4">12-OCT-2022</p>
  //         </div>
  //       </div>
  //       <div className="bg-black  rounded-2xl ">
  //         <div className="relative sm:px-3 px-2 pt-3">
  //           <img className="" src={rec} alt="" />
  //           <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">
  //             <img src={logo} alt="" />
  //           </div>
  //         </div>
  //       </div>
  //     </div> */}

  //   </div>
  // );

  if (badge.badgetype == "education") {
    return (
      <>
        <div>
          <div className="bg-black  rounded-2xl ">
            <div className="relative sm:px-3 px-2 pt-3">
              <img className="" src={rec} alt="" />
              <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="text-[#DAFF3E] text-left sm:px-5 mt-5 px-2">
              <p className="font-bold sm:text-xl text-[1.2vh]">{badge.name}</p>
              <p className="font-normal sm:text-base text-xs text-[1vh] mt-1">
                {badge.description}
              </p>
              <p className="font-bold sm:text-lg text-[1vh] py-4">
                {badge.date}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
