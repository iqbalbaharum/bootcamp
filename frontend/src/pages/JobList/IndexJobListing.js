import React from "react";
import ListJobForm from "./ListJobForm";
import Testimonial from "./Testimonial";
import JobFormbg from "../../../assets/img/jobformbg2.png";

function IndexJobListing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <div
        className="w-full h-full"
      >
        <div className="mx-[16rem] py-[3rem] font-robotoMono">
          <div className="text-[50px] font-bold text-center py-3 px-3">
            <p>List A Web3 Job</p>
          </div>

          <div className="mt-[3rem]">
            <form>
              <div className="flex flex-row">
                <div className="basis-3/4">
                  <ListJobForm />
                </div>
                <div className="basis-1/4">
                  <Testimonial />
                </div>
              </div>
              <div className="w-full -mt-[11rem] ml-[25rem]">
                <img src={JobFormbg} alt="" className="scale-[0.8]" />
              </div>

              <div className="flex  justify-center mt-10">
                <div>
                  <button
                    type="button"
                    className="bg-black text-[#DAFF3E] px-5 py-1 rounded-full"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexJobListing;
