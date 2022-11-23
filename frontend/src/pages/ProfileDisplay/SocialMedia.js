import React, { useContext } from "react";
import github from "../../../assets/img/githubIcon.png";
import website from "../../../assets/img/websiteIcon.png";
import twitter from "../../../assets/img/twitter.png";
import { UserProfileContext } from "./display";

function Socialmedia() {

  const {profile} = useContext(UserProfileContext)

  return (
    <div>
      <form>
        <div className="flex flex-row justify-center pb-[2rem]">
          <div>
            <img src={twitter} alt="" className="w-[auto] h-[40px]" />
          </div>
          <div>
            <img src={github} alt="" className="w-[auto] h-[40px]" />
          </div>
          <div>
            <img src={website} alt="" className="w-[auto] h-[40px]" />
          </div>
        </div>

        <div className="text-left sm:text-base text-[1.2vh] sm:mx-[2rem] block sm:px-[4rem] sm:py-[3rem] mt-2 p-[1rem]  text-[#DAFF3E] bg-black rounded-[20px] focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
          {profile.bio}
        </div>
      </form>
    </div>
  );
}

export default Socialmedia;
