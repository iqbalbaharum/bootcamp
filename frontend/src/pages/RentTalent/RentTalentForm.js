import React from "react";

function RentTalentForm() {
  return (
    <form>
      <div className="mr-[3rem] px-[3rem] text-left">
        {/* -------------------------------------------------------- 1 ----------------------------------------------------------- */}
        <div className="mb-3 ">
          <label
            htmlFor="email"
            className="block font-semibold text-left text-base px-2"
          >
            Position
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* -------------------------------------------------------- 2 ----------------------------------------------------------*/}
        <div className=" mb-3">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Description
          </label>
          <div>
            <textarea className="resize-y rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
        </div>
        {/* ------------------------------------------------------- 3 ----------------------------------------------------------*/}
        <div className="mb-[5rem]">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Company
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ------------------------------------------------------- 4 ----------------------------------------------------------*/}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Skill Required (choose from the list)
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ------------------------------------------------------- 5 ----------------------------------------------------------*/}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Other Skills Required
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ------------------------------------------------------ 6 ----------------------------------------------------------*/}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Duration of Project
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ----------------------------------------------------- 7 ---------------------------------------------------------- */}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Location
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ----------------------------------------------------- 8 ---------------------------------------------------------- */}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Your Email
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ---------------------------------------------------- 9 ------------------------------------------------------------- */}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Company Twitter/Website
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* ---------------------------------------------------- 10 ---------------------------------------------------------- */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-base  font-semibold text-left  px-2"
          >
            Project Deck/Briefing
          </label>
          <input
            type="file"
            className="rounded-md block w-full px-5 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </form>
  );
}

export default RentTalentForm;
