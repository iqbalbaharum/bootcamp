import React from "react";
import { TypeAnimation } from "react-type-animation";
import cursor from "../../../assets/img/cursor.png";

function FirstSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <section className="text-black h-screen font-robotoMono flex flex-col w-full items-center p-8">
        <ul className="text-left font-bold text-xl max-w-2xl">
          <li className="text-red-500">
            <TypeAnimation sequence={["01 hello world.", 1000]} />
          </li>
          <li>02 welcome to the (web3 career hub)</li>
          <li>03 join 7 million to kickstart your web3 journey _</li>
        </ul>
        <div>
          <a
            className="inline-flex text-[60px] my-8 items-center bg-black font-bold w-full text-[#DAFF3E] rounded border px-12 py-3 text-white hover:bg-[#FF5733] hover:text-black focus:bg-black focus:text-[#DAFF3E] active:bg-blue-500 sm:w-auto"
            href="/jobs"
          >
            <span className="text-3xl"> CAREER HUB </span>

            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <div className="flex flex-row justify-end">
            <img
              src={cursor}
              alt=""
              className="relative left-10 bottom-5 h-[120px] justify-right"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
