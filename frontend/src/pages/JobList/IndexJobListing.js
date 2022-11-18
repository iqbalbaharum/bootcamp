import React, { createContext, useState } from "react";
import ListJobForm from "./ListJobForm";
import Testimonial from "./Testimonial";
import JobFormbg from "../../../assets/img/jobformbg2.png";
import useIpfsFactory from "../../hooks/useIpfsFactory";
import { useWallet } from "../../hooks/useWallet";

export const JobCreationFormContext = createContext()

function IndexJobListing() {

  const { ipfs } = useIpfsFactory()
  const { callMethod } = useWallet()

  const [logoImg, setLogoImg] = useState()
  
  const [form, setForm] = useState({
    position: '',
    description: '',
    company: '',
    skills: '',
    salary_max: 0,
    salary_min: 0,
    salary_currency: 'USD',
    bounty_amount: 0,
    bounty_currency: 'NEAR',
    location: '',
    email: '',
    website: '',
    logo: '',
    expired: 1671337675,
  })

  const handleChange = (evt) => {
    const { type, name, value } = evt.target

    switch(name) {
      default:
        setForm({
          ...form,
          [name]: type === 'number' ? parseInt(value) : value
        })
        break
    }
  }

  const onHandleSubmit = async (evt) => {
    evt.preventDefault();
    try {

      if(logoImg) {
        const cid = await ipfs.add(logoImg)
        setForm({
          ...form,
          logo: `ipfs://${cid[0].hash}`
        })

        if(logoImg) {
          const res = await callMethod({
            contractId: process.env.CONTRACT_NAME,
            method: 'new_job',
            args: {
              detail: form
            }
          })

          console.log(res)
        }
      }
      
    } catch(e) {
      console.log(e)
    }
  }

  const onFileChange = (e) => {
    setLogoImg(e.target.files[0])
  }
  
  return (
    <JobCreationFormContext.Provider value={{form, setForm, handleChange, onFileChange}}>
      <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
        <div
          className="w-full h-full"
        >
          <div className="mx-[16rem] py-[3rem] font-robotoMono">
            <div className="text-[50px] font-bold text-center py-3 px-3">
              <p>List A Web3 Job</p>
            </div>

            <div className="mt-[3rem]">
                <div className="flex flex-row">
                  <div className="basis-3/4">
                    <ListJobForm />
                  </div>
                  <div className="basis-1/4">
                    <Testimonial />
                  </div>
                </div>
                {/* <div className="w-full -mt-[11rem] ml-[25rem]">
                  <img src={JobFormbg} alt="" className="scale-[0.8]" />
                </div> */}

                <div className="flex  justify-center">
                  <div>
                    <button
                      type="button"
                      className="bg-black text-[#DAFF3E] px-5 py-1 rounded-full"
                      onClick={onHandleSubmit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </JobCreationFormContext.Provider>
  );
}

export default IndexJobListing;
