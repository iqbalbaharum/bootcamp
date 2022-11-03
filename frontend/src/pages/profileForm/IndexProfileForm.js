import React from "react";

import Bio from "./Bio";
import Skill from "./Skill";
import Social from "./Social";
import WebCredential from "./webcredential";
import Buttons from "./buttons";

import logo from "../../../assets/img/logoSmall.png";

function IndexProfile() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#E5E5E5]">
      <div className="w-full flex ml-8 mt-4">
        <img src={logo} alt="" className="w-[140px] h-[40px]" />
      </div>

      <form>
        <div className="grid grid-rows-1 grid-flow-col gap-1">
          <div>
            <Bio />
            <Skill />
            <Social />
            <WebCredential />
          </div>
          <div>
            <Buttons />
          </div>
        </div>
      </form>
    </div>
  );
}

export default IndexProfile;
