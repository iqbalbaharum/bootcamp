import React, { useState } from "react";
import Basicdetails from "./BasicDetails";
import MyJob from "./MyJob";
import Skills from "./skills";
import Endorsement from "./Endorsement";
import Career from "./CareerCredentials";
import Education from "./Education";
import IntHobby from "./InterestHobby";
import Socialmedia from "./SocialMedia";

function IndexProfileDisplay(props) {
  props.funcNav(false);

  const [jobs] = useState([
    {
      title: "PHP Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      company: "Iqbal Pte Ltd",
      skills: ["Community", "Hardhead", "Slang"],
      salary: {
        min: 0,
        max: 10000,
        currency: "USD",
      },
      location: "Kuala Lumpur, MY",
      email: "iqbal@seed.io",
      socials: [
        {
          type: "website",
          url: "https://website.com",
        },
        {
          type: "twitter",
          url: "@iqbalbaharum",
        },
      ],
      logo: "Qymd...",
      bounty: {
        amount: 500,
        currency: "USD",
      },
      status: 0,
    },
    {
      title: "PHP Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      company: "Iqbal Pte Ltd",
      skills: ["Community", "Hardhead", "Slang"],
      salary: {
        min: 0,
        max: 10000,
        currency: "USD",
      },
      location: "Kuala Lumpur, MY",
      email: "iqbal@seed.io",
      socials: [
        {
          type: "website",
          url: "https://website.com",
        },
        {
          type: "twitter",
          url: "@iqbalbaharum",
        },
      ],
      logo: "Qymd...",
      bounty: {
        amount: 1,
        currency: "USD",
      },
      status: 0,
    },
  ]);

  const [badges] = useState([
    {
      name: "Award 1",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "education",
    },
    {
      name: "Award 2",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "education",
    },
    {
      name: "Award 3",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "education",
    },
    {
      name: "Award 1",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "career",
    },
    {
      name: "Award 2",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "career",
    },
    {
      name: "Award 3",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "career",
    },
    {
      name: "Award 4",
      description: "Created a web3 job portal that implement NFT credential",
      date: "10 Oct 2022",
      badgetype: "career",
    },
  ]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <form>
        <div className="xs:mx-[0.8rem] py-[3rem] sm:mx-[20rem]">
          {/* <Navbar isNavEnabled={true} /> */}
          <div>
            <Basicdetails />
            <Socialmedia />
            <Skills />
            <div className="grid grid-cols-2 gap-4 w-full mt-8 mb-4 ">
              {jobs.map((job) => MyJob(job))}
            </div>

            <div className="sm:text-2xl text-left font-bold text-xl">
              Career Credential
            </div>
            <div className="grid grid-cols-3 gap-1 w-full mt-8 mb-4 ">
              {badges.map((badge) => Career(badge))}
            </div>

            <div className="sm:text-2xl text-left font-bold text-xl">
              Education
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mt-8 mb-4 ">
              {badges.map((badge) => Education(badge))}
            </div>

            <div className="sm:text-2xl text-left font-bold text-xl">
              Interest & Hobby
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mt-8">
              {badges.map((badge) => IntHobby(badge))}
            </div>
            <div className="sm:text-2xl text-left font-bold text-xl">
              Interest & Hobby
            </div>

            <Endorsement />
          </div>
        </div>
      </form>
    </div>
  );
}

export default IndexProfileDisplay;
