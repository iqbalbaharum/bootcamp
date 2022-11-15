import React, { useContext } from "react";
import { ProfileFormContext } from ".";

const Social = () => {
  const profileFormContext = useContext(ProfileFormContext);

  return (
    <div className="mt-[2rem] font-robotoMono">
      <div className="bg-[#DAFF3E] rounded-xl shadow-md">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl py-sm">
            <b>SOCIAL</b>
          </div>
          <div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                TWITTER
              </label>
              <input
                name="twitter"
                value={profileFormContext.twitter}
                onChange={profileFormContext.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                GITHUB
              </label>
              <input
                name="github"
                value={profileFormContext.github}
                onChange={profileFormContext.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                LINKEDIN
              </label>
              <input
                name="linkedin"
                value={profileFormContext.linkedin}
                onChange={profileFormContext.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                WEBSITE
              </label>
              <input
                name="website"
                value={profileFormContext.website}
                onChange={profileFormContext.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
