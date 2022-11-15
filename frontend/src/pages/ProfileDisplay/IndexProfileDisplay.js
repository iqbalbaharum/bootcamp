import React from "react";
import Basicdetails from "./BasicDetails";
// import JobListing from "./JobListing";
import Skills from "./skills";
import Endorsement from "./Endorsement";
import Career from "./CareerCredentials";
import Education from "./Education";
import IntHobby from "./InterestHobby";
import Socialmedia from "./SocialMedia";

function IndexProfileDisplay(props) {
  props.funcNav(false);

  return (
    <div>
      <form>
        <div className="relative min-h-screen overflow-x-hidden p-[2rem] bg-[#DAFF3E]">
          <div className="sm:mx-[6rem] py-[3rem]">
            <Basicdetails />
            <Socialmedia />
            <Skills />
            {/* <JobListing /> */}
            <Career />
            <Education />
            <IntHobby />

            <Endorsement />
          </div>
        </div>
      </form>
    </div>
  );
}

export default IndexProfileDisplay;
