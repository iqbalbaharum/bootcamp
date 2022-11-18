import React from "react";
import ListJobForm from "./RentTalentForm";

import logo from "../../../assets/img/logoSmall.png";
import rentbg from "../../../assets/img/rentbg2.png";
import Testimonial from "./Testimonial";

function IndexRentTalent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[black] text-[#DAFF3E]">
      <div>
        <div className="mx-[16rem] py-[3rem] font-robotoMono">
          <div className="text-[50px] font-bold text-center py-3 px-2">
            <p>Rent Talent</p>
          </div>
          <span className="font-normal text-lg">From our Product Lab</span>

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
              <div className="w-full -mt-[3rem] ml-[25rem]">
                <img src={rentbg} alt="" className="scale-[0.8]" />
              </div>
              <div className="flex  justify-center">
                <div>
                  <button
                    type="button"
                    className="text-black bg-[#DAFF3E] px-5 py-1 rounded-full"
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

export default IndexRentTalent;
