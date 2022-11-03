import React from "react";
import github from "../../../assets/img/githubIcon.png";
import website from "../../../assets/img/websiteIcon.png";
import twitter from "../../../assets/img/twitter.png";

function Socialmedia() {
  return (
    <div className="px-[10rem] mt-8 font-robotoMono">
      <div className="px-14">
        <form>
          <div className="flex flex-row justify-center pb-[2rem]">
            <div>
              <img src={twitter} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <img src={github} alt="" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <img src={website} alt="" className="w-[50px] h-[50px]" />
            </div>
          </div>

          <div className="text-left text-base mx-[2rem] block px-[4rem] py-[3rem] mt-4 text-[#DAFF3E] bg-black rounded-[20px] focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            Another female entrepreneur. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. nim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. nim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Socialmedia;
