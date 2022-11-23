import React from "react";
import Basicdetails from "./BasicDetails";
// import JobListing from "./JobListing";
import Skills from "./skills";
import Endorsements from "./Endorsement";
import Career from "./CareerCredentials";
import Education from "./Education";
import IntHobby from "./InterestHobby";
import Socialmedia from "./SocialMedia";

//NFT fetching is implemented in CareerCredentials
function IndexProfileDisplay() {
  return (
    <div>
      <form>
        <div className="relative min-h-screen overflow-x-hidden p-[2rem] bg-[#DAFF3E]">
          <div>
            <Basicdetails />
            <Socialmedia />
            <Skills />
            {/* <JobListing /> */}
            <Career />
            <Education />
            <IntHobby />
            <div className="flex justify-center items-center mb-[10rem]">
              <Endorsements />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IndexProfileDisplay;
