import React, { useState, useEffect, createContext } from "react";
import Basicdetails from "./BasicDetails";
// import JobListing from "./JobListing";
import Skills from "./skills";
import Endorsements from "./Endorsement";
import Career from "./CareerCredentials";
import Education from "./Education";
import IntHobby from "./InterestHobby";
import Socialmedia from "./SocialMedia";
import { useParams } from "react-router-dom"
import { useWallet } from "../../hooks/useWallet";
//NFT fetching is implemented in CareerCredentials

export const UserProfileContext = createContext()

const ProfileDisplay = () => {

  const { account } = useParams()
  const { viewMethod } = useWallet()
  
  const [profile, setProfile] = useState({
    bio: '',
    country: '',
    email: '',
    full_name: '',
    github: '',
    handler: '',
    is_open_for_remote: false,
    is_open_for_work: false,
    is_subscribe: false,
    linkedin: '',
    otherskills: [],
    skills: [],
    twitter: '',
    website: ''
  })

  const getProfile = async (account) => {
    const res = await viewMethod(process.env.CONTRACT_NAME, 'view_profile', { account_id: account})

    if(res) {
      setProfile(res.profile)
    }
  }

  useEffect(()=> {
    if(account && !profile.handler) {
      getProfile(account)
    }
  },[profile, getProfile])

  return (
    <div>
        <div className="relative min-h-screen overflow-x-hidden p-[2rem] bg-[#DAFF3E]">
          {profile && (
            <UserProfileContext.Provider value={{profile}}>
              <div>
                <Basicdetails />
                <Socialmedia />
                <Skills />
                {/* <JobListing /> */}
                <Career />
                <Education />
                <IntHobby />
                <div className="flex justify-center items-center mb-[10rem]">
                  <Endorsements />
                </div>
              </div>
            </UserProfileContext.Provider>
          )}
        </div>
    </div>
  )
}

export default ProfileDisplay;
