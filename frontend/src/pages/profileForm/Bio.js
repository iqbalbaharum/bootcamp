import React from "react";

import image from "../../../assets/img/image.png";

function Bio() {
  return (
    <div className="px-[10rem] py-[3rem] mt-8 font-robotoMono">
      <div className="text-4xl font-bold text-left py-3 px-3">
        <p>MY WEB3 PROFILE</p>
      </div>

      <div className="bg-[#DAFF3E] rounded-[30px]">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl">
            <b>BIO</b>
          </div>
          <form>
            <div className="flex flex-row">
              {/* upload profile pic */}
              <div className="flex flex-col">
                <div>
                  <img src={image} alt="" />
                </div>
                <div className="py-[1rem]">
                  <button
                    type="button"
                    className="bg-black text-[#DAFF3E] px-5 py-1 rounded-full"
                  >
                    UPLOAD
                  </button>
                </div>
              </div>
              {/* end upload profile pic */}
              <div className="w-full ml-7 mb-2 text-left py-[2rem]">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 px-4"
                >
                  NAME
                </label>
                <input
                  type=""
                  className="block w-full px-7 py-2 mt-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                HANDLE*
              </label>
              <input
                type=""
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                ONE-LINER BIO
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
                EMAIL*
              </label>
              <input
                type="email"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                LOCATION
              </label>
              <input
                type=""
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bio;
