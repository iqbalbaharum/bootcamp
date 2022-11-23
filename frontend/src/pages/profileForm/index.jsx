import React, { createContext, useEffect, useState } from "react";

import ProfileForm from "./Form";
import { NearWalletContext } from "../../context/wallet.context";
import useIpfs from "../../hooks/useIpfs";
import useIpfsFactory from "../../hooks/useIpfsFactory";
import { useWallet } from "../../hooks/useWallet";

export const ProfileFormContext = createContext()

const Profile = () => {

  const { ipfs } = useIpfsFactory()
  const { accountId, viewMethod, callMethod } = useWallet()

  const [form, setForm] = useState({
    avatar: "",
    name: "",
    handler: "",
    bio: "",
    nearAddress: accountId,
    email: "",
    twitter: "",
    github: "",
    linkedin: "",
    website: "",
    mainSkill: "",
    country: "",
    is_open_for_work: false,
    is_open_for_remote: false,
    is_subscribe: false
  })

  const [profileImg, setProfileImg] = useState()
  
  const handleChange = (evt) => {
    const {type, value, name} = evt.target

    let val
    switch(type) {
      case 'checkbox':
        val = !form[name]
        break
      default:
        val = value
    }

    setForm({
      ...form,
      [evt.target.name]: val
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      if(profileImg) {
        const cid = await ipfs.add(profileImg)
        setForm({
          ...form,
          [avatar]: `ipfs://${cid}`
        })
      }

      await callMethod({
        contractId: process.env.CONTRACT_NAME,
        method: 'add_profile',
        args: {
          profile: form
        }
      })

      console.log(form)

    } catch(e) {
      console.log(e)
    }
  }

  const getProfile = async () => {
    const res = await viewMethod(process.env.CONTRACT_NAME, 'view_profile', { account_id: accountId})
    if(res) {
      setForm(res.profile)
    }
  }

  useEffect(()=> {
    if(accountId && !form.handler) {
      getProfile()
    }
  },[accountId, form, getProfile])

  return (
    <ProfileFormContext.Provider value={{form, profileImg, setProfileImg, onSubmit, handleChange}}>
      {accountId && <ProfileForm />}
    </ProfileFormContext.Provider>
  );
}

export default Profile;
