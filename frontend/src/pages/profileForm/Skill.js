import React from "react";

function Skill() {
  return (
    <div className="px-[10rem] py-[2rem] mt-12 font-robotoMono">
      <div className="bg-[#DAFF3E] rounded-[30px]">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl py-[1rem]">
            <b>SKILL</b>
          </div>
          <form>
            <div className="mb-2 text-left py-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                MAIN SKILL
              </label>
              <input
                type=""
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                OTHER SKILL
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left py-1">
              <b>
                <input type="checkbox" />
                &nbsp; Open to Job Opportunity?
              </b>
            </div>
            <div className="mb-2 text-left py-1">
              <b>
                <input type="checkbox" />
                &nbsp; Open to remote Job?
              </b>
            </div>
            <div className="mb-2 text-left py-1">
              <b>
                <input type="checkbox" />
                &nbsp; Received New Jobs in your mailbox?
              </b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Skill;
