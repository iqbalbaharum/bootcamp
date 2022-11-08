import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ArticleCard from "./Article/index";
import Graphic1 from "../../../assets/img/bowl2.png";
import Graphic2 from "../../../assets/img/graphic.png";
import Search from "../../../assets/img/search.png";
import { ConfigContext } from "../../context/config.context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ToggleFilter(props) {
  return (
    <>
      <label htmlFor={props.label} className="relative h-6 w-14 cursor-pointer">
        <input type="checkbox" id={props.label} className="peer sr-only" />

        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />

        <span className="absolute inset-0 m-1 h-4 w-6 rounded-full bg-white transition peer-checked:translate-x-6" />
      </label>
      <span className="px-2 text-sm">{props.label}</span>
    </>
  );
}

function SearchTag(tag) {
  return (
    <a
      className={classNames(
        tag.selected
          ? "bg-black text-[#DAFF3E]"
          : "border-black text-black hover:bg-[#DAFF3E]",
        "border-2 rounded-full px-2 py-1 font-bold"
      )}
      key={tag.name}
      href="#"
    >
      {tag.name}
    </a>
  );
}

function ListingA1(props) {

  const [tags] = useState([
    { name: "Full Stack Dev", selected: false },
    { name: "Solidity", selected: false },
    { name: "Rust", selected: false },
    { name: "Tokenomics", selected: false },
    { name: "Javascript", selected: false },
    { name: "Product Manager", selected: false },
  ]);

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

  return (
    <>
      <div className="mx-8 font-robotoMono">
        <div className="flex flex-row justify-center w-full mt-[2rem]">
          <div className="flex flex-col bg-[#DAFF3E] text-black w-[1077px]  md:h-[200px] justify-center items-center  mr-4 rounded-3xl">
            <p className="font-bold text-4xl">LIST JOB</p>
            <p className="font-bold text-normal">Unlock 7+ million talents</p>
            <img
              src={Graphic1}
              alt=""
              className="absolute scale-[0.3] mt-[3.7rem]"
            />
          </div>

          <div className="static flex flex-col bg-black text-[#DAFF3E] w-[1077px]  md:h-[200px] justify-center items-center rounded-3xl">
            <p className="font-bold text-4xl">RENT TALENT</p>
            <p className="font-bold text-normal">
              Rent our dev team to churn out your dream project
            </p>
            <img
              src={Graphic2}
              alt=""
              className="absolute scale-[0.3] mt-[3.7rem] ml-[13.8rem]"
            />
          </div>
        </div>
        <div className="flex flex-row w-full mt-8">
          <div className="relative flex justify-start w-[50%]">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <img src={Search} alt="" />
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Skill or Location"
              className="text-left w-full py-2 pl-10 text-sm rounded-md border-solid border-2 border-black focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex flex-row pl-4 justify-between">
            <div className="flex flex-row items-center px-1">
              <ToggleFilter label="Remote" />
            </div>
            <div className="flex flex-row items-center px-1">
              <ToggleFilter label="Full Time" />
            </div>
            <div className="flex flex-row items-center px-1">
              <ToggleFilter label="Freelance" />
            </div>
            <div className="flex flex-row items-center px-1">
              <ToggleFilter label="Internship" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 font-robotoMono mt-4">
          {tags.map((tag) => SearchTag(tag))}
        </div>
        <div className="my-4 text-[#EDEDED]">
          <hr />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full mt-8 mb-4">
          <form className="p-8 w-full bg-[#DAFF3E] boxShadow rounded-2xl">
            <div className="mb-2 text-left mt-4">
              <label
                htmlFor="email"
                className="block text-2xl font-semibold text-black "
              >
                What do you have in mind
              </label>
              <input
                type=""
                required
                placeholder="Paste Profile Link"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left mt-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-black "
              >
                No Profile Yet?
              </label>
              <input
                type=""
                required
                placeholder="Enter Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
              <button
                type="button"
                className="bg-black border-black rounded-full px-4 py-1 font-bold text-[#DAFF3E] text-base"
              >
                Submit
              </button>
            </div>
          </form>
          {jobs.map((job) => ArticleCard(job))}
        </div>
      </div>
    </>
  );
}
export default ListingA1;
