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
        <div className="grid grid-rows-1 grid-flow-col gap-1 mb-5">
          <div>
            <Bio />
            <Skill />
            <Social />
            <OtherForm />
          </div>
          <div>
            <Buttons />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
