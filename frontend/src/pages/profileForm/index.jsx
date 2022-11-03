import React, { createContext, useContext, useState } from "react";

import ProfileForm from "./Form";
import { NearWalletContext } from "../../../context/wallet.context";

export const ProfileFormContext = createContext()

const Profile = () => {

  const walletContext = useContext(NearWalletContext)
  const [form, setForm] = useState({
    name: "",
    handle: "",
    bio: "",
    nearAddress: walletContext.wallet.accountId,
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

  const handleChange = (evt) => {
    const value = evt.target.value
    setForm({
      ...form,
      [evt.target.name]: value
    })
  }

  return (
    <ProfileFormContext.Provider value={{form, handleChange}}>
      {walletContext.wallet.accountId && <ProfileForm />}
    </ProfileFormContext.Provider>
  );
}

export default Profile;
