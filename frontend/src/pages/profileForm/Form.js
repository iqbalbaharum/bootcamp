import React from "react";

import Bio from "./Bio";
import Skill from "./Skill";
import Social from "./Social";
import Buttons from "./buttons";
import OtherForm from "./OtherForm";

function ProfileForm() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#E5E5E5]">
      <form>
        <div className="mx-[16rem] py-[3rem] font-robotoMono">
          <div className="flex flex-row">
            <div className="basis-3/4">
              <Bio />
              <Skill />
              <Social />
              <OtherForm />
            </div>
            <div className="basis-1/4">
              <Buttons />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
