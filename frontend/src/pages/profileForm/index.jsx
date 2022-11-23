import React, { createContext, useContext, useState } from "react";

import ProfileForm from "./Form";
import { NearWalletContext } from "../../context/wallet.context";
import useIpfs from "../../hooks/useIpfs";
import useIpfsFactory from "../../hooks/useIpfsFactory";
import { useWallet } from "../../hooks/useWallet";

export const ProfileFormContext = createContext()

const Profile = () => {

  const { ipfs } = useIpfsFactory()
  const { accountId } = useWallet()

  const [form, setForm] = useState({
    name: "",
    handle: "",
    bio: "",
    nearAddress: accountId,
    email: "",
    twitter: "",
    github: "",
    linkedin: "",
    website: "",
    mainSkill: "",
    openToJobOpportunity: true,
    openToRemoteJob: true,
    receiveNewJobEmail: true,
    showPublicAddress: true,
    showLocation: true
  })

  const [profileImg, setProfileImg] = useState()

  const handleChange = (evt) => {
    const value = evt.target.value
    setForm({
      ...form,
      [evt.target.name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const cid = await ipfs.add(profileImg)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <ProfileFormContext.Provider value={{form, profileImg, setProfileImg, onSubmit, handleChange}}>
      {accountId && <ProfileForm />}
    </ProfileFormContext.Provider>
  );
}

export default Profile;
