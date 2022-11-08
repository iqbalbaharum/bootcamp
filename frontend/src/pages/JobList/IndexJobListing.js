import React, { createContext, useState } from "react";
import ListJobForm from "./ListJobForm";
import Testimonial from "./Testimonial";
import JobFormbg from "../../../assets/img/jobformbg2.png";

export const JobCreationFormContext = createContext()

function IndexJobListing() {

  const [form, setForm] = useState({
    position: '',
    description: '',
    company: '',
    skills: [],
    salary: {
      min: 0,
      max: 0,
      currency: 'USD'
    },
    location: '',
    email: '',
    website: '',
    logo: '',
    bounty: {
      amount: 0,
      currency: 'NEAR'
    }
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    console.log(name, value)
    switch(name) {
      case 'min':
      case 'max':
        setForm((form) => ({
          ...form.salary,
          salary: {
            [name]: parseInt(value)
          }
        }))
        break
      default:
        setForm({
          ...form,
          [name]: value
        })
        break
    }
  }

  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    console.log(form)
  }
  
  return (
    <JobCreationFormContext.Provider value={{form, setForm, handleChange}}>
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
