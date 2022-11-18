import React from "react";
import logo from "../../../assets/img/companyLogo.png";
import rec from "../../../assets/img/Rectangle.png";

export default function IntHobby(badge) {
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
