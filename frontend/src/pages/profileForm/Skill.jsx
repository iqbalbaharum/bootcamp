import React, { useContext } from "react";
import { ProfileFormContext } from ".";

const Skill = () => {
  const profileFormContext = useContext(ProfileFormContext);

  return (
    <div className="font-robotoMono">
      <div className="bg-[#DAFF3E] rounded-xl shadow-md">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl py-sm">
            <b>SKILL</b>
          </div>
          <div>
            <div className="mb-2 text-left py-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                MAIN SKILL
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="skills"
                value={profileFormContext.form.mainSkill}
                onChange={profileFormContext.handleChange}
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                OTHER SKILL
              </label>
              <input name="skills"
                value={profileFormContext.form.otherskills}
                onChange={profileFormContext.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
