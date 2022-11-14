import React, { useContext, useEffect, useState } from "react";
import { ProfileFormContext } from ".";

import image from "../../../assets/img/image.png";

function Bio() {

  const profileFormContext = useContext(ProfileFormContext)
  const [preview, setPreview] = useState()

  const onFileChange = (e) => {
    profileFormContext.setProfileImg(e.target.files[0])
  }

  useEffect(() => {
    if (!profileFormContext.profileImg) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(profileFormContext.profileImg)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [profileFormContext.profileImg])

  return (
    <div className="px-[10rem] py-[3rem] mt- font-robotoMono">
      <div className="text-4xl font-bold text-left py-3 px-3">
        <p>MY WEB3 PROFILE</p>
      </div>

      <div className="bg-[#DAFF3E] rounded-xl shadow-md">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl">
            <b>BIO</b>
          </div>
          <div>
            <div className="mt-5 mb-2">
              <div className="flex justify-center">
                <img src={preview} alt="" />
              </div>
              <div className="py-[1rem]">
                <input id="avatar" type="file" onChange={onFileChange} hidden />
                <label
                  for="avatar"
                  className="bg-black text-[#DAFF3E] rounded-full px-4 py-2 cursor-pointer"
                >
                  UPLOAD
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-full mb-2 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 px-4"
                >
                  FULL NAME *
                </label>
                <input
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="name"
                  value={profileFormContext.name}
                  onChange={profileFormContext.handleChange}
                />
              </div>
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="handler"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                SEED HANDLER *
              </label>
              <input
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="handle"
                value={profileFormContext.handle}
                onChange={profileFormContext.handleChange}
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 px-4"
              >
                ONE-LINER BIO
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="bio"
                value={profileFormContext.bio}
                onChange={profileFormContext.handleChange}
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
                name="email"
                value={profileFormContext.email}
                onChange={profileFormContext.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
