import React, { useContext } from "react";
import { JobCreationFormContext } from "./IndexJobListing";
import {setProperty} from 'dot-prop'

function ListJobForm() {

  const jobCreationFormContext = useContext(JobCreationFormContext)

  const {
    min,
    max,
  } = jobCreationFormContext.form.salary;

  return (
    <form>
      <div className="mr-[3rem] px-[3rem] text-left">
        {/* -------------------------------------------------------- 1 ----------------------------------------------------------- */}
        <div className="mb-3 ">
          <label
            htmlFor="position"
            className="block font-semibold text-left text-lg  text-gray-800 px-2"
          >
            Position
          </label>
          <input
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="position"
            value={jobCreationFormContext.form.position}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* -------------------------------------------------------- 2 ----------------------------------------------------------*/}
        <div className=" mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Description
          </label>
          <div>
            <textarea 
              name="description"
              className="resize-y rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={jobCreationFormContext.form.description}
              onChange={jobCreationFormContext.handleChange}
            />
          </div>
        </div>
        {/* ------------------------------------------------------- 3 ----------------------------------------------------------*/}
        <div className="mb-[5rem]">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Company
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="company"
            value={jobCreationFormContext.form.company}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ------------------------------------------------------- 4 ----------------------------------------------------------*/}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Skill Required (choose from the list)
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="skills"
            value={jobCreationFormContext.form.skills}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ------------------------------------------------------- 5 ----------------------------------------------------------*/}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Other Skills Required
          </label>
          <input
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="otherskills"
            value={jobCreationFormContext.form.otherskills}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ------------------------------------------------------ 6 ----------------------------------------------------------*/}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Salary Range
          </label>
          <div className="flex flex-row">
            <div className="basis-2/4 mr-3">
              <input
                type="number"
                className="rounded-md text-sm block w-full px-5 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Min Yearly Salary in USD"
                name="min"
                value={min}
                onChange={jobCreationFormContext.handleChange}
              />
            </div>
            <div className="basis-2/4">
              <input
                type="number"
                className="rounded-md text-sm block w-full px-5 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Max Yearly Salary in USD"
                name="max"
                value={max}
                onChange={jobCreationFormContext.handleChange}
              />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------- 7 ---------------------------------------------------------- */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Location
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="location"
            value={jobCreationFormContext.form.location}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ----------------------------------------------------- 8 ---------------------------------------------------------- */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Your Email
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="email"
            value={jobCreationFormContext.form.email}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ---------------------------------------------------- 9 ------------------------------------------------------------- */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
          >
            Company Twitter/Website URL
          </label>
          <input
            type=""
            className="rounded-md block w-full px-1 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name="website"
            value={jobCreationFormContext.form.website}
            onChange={jobCreationFormContext.handleChange}
          />
        </div>
        {/* ---------------------------------------------------- 10 ---------------------------------------------------------- */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg  font-semibold text-left text-gray-800 px-2"
            name="logo"
            value={jobCreationFormContext.form.logo}
            onChange={jobCreationFormContext.handleChange}
          >
            Company Logo
          </label>
          <input
            type="file"
            className="rounded-md block w-full px-5 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div className="text-sm m-2 mb-[3rem]">
            Mandatory: PNG or GIF format <br />
            Recommended: size less than 200KB (Max. 4MB)
          </div>
        </div>
        {/* --------------------------------------------------- 11 ---------------------------------------------------------- */}
        <div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-lg  font-semibold text-left text-gray-800 px-2"
            >
              Listing Period
              <span className="text-sm font-normal ml-[4rem]">
                Select one from below
              </span>
            </label>
          </div>
          {/* ----------------------------------- Radio button ----------------------------------------------- */}
          <div>
            <div>
              <input
                type="radio"
                id="24hours"
                name="duration"
                className="peer hidden"
              />

              <label
                htmlFor="24hours"
                className="rounded-md block text-sm w-full px-5 py-3 mb-2 text-gray-700  bg-white peer-checked:bg-gray-300 border focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">24 Hours</div>
                  <div className="flex flex-col">FREE for this month!</div>
                </div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="3days"
                name="duration"
                className="peer hidden "
              />
              <label
                htmlFor="3days"
                className="rounded-md block text-sm w-full px-5 py-3 mb-2  text-gray-700 bg-white peer-checked:bg-gray-300 border focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">3 Days</div>
                  <div className="flex flex-col">FREE for this month!</div>
                </div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="7days"
                name="duration"
                className="peer hidden"
              />
              <label
                htmlFor="7days"
                className="rounded-md block text-sm w-full px-5 py-3 mb-2 text-gray-700 bg-white peer-checked:bg-gray-300 border focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">7 Days</div>
                  <div className="flex flex-col">FREE for this month!</div>
                </div>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="14days"
                name="duration"
                className="peer hidden"
              />
              <label
                htmlFor="14days"
                className="rounded-md block  text-sm w-full px-5 py-3 mb-2 text-gray-700 bg-white peer-checked:bg-gray-300 border focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">14 Days</div>
                  <div className="flex flex-col">FREE for this month!</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* ------------------------------- End Radio button -------------------------------------------- */}
        {/* ---------------------------------------------------- 10 ---------------------------------------------------------- */}
        <div className="my-[5rem]">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-left text-gray-800 px-2"
          >
            Referal Bounty
          </label>
          <input
            type="text"
            className="rounded-md block w-full px-5 py-2 mt-2 text-gray-700 bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div className="text-sm mx-[1rem] my-[1rem]">
            Referral Bounty rewards referer, to be paid when hired <br />
            Highly increases exposure of the job listed <br />
            Highly leverage on insider’s network <br />
            Average bounty: 1 month salary
          </div>
        </div>
      </div>
    </form>
  );
}

export default ListJobForm;
