import React from "react";
import imagesquare from "../../../assets/img/imagesquare.png";
import lightning from "../../../assets/img/lightning.png";
import dollarbag from "../../../assets/img/dollarbag.png";

function JobListing() {
  return (
    <div className="px-[10rem] py-[3rem] mt-8 font-robotoMono">
      <div>
        <form>
          <div>
            <div className="mb-2 text-left px-[6rem]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="text-[40px]">
                    <b>JOB LISTING</b>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="pr-4">
                    <button
                      type="button"
                      className="bg-white border-solid border-2 border-black text-[#000000] px-5 py-1 rounded-full font-bold"
                    >
                      <a href="/listjobform">List a Job</a>
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="bg-black border-solid border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full font-bold"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="flex flex-row mx-[5rem]">
              {/* First Box have CONTENT 1 */}

              <div className="flex flex-col px-4">
                <div className="text-left text-base block px-7 py-6 mt-4 bg-white rounded-[20px] focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                  <div className="flex flex-row justify justify-between">
                    <div className="flex flex-col">
                      <div>Maximoz Team</div>
                      <div className="font-bold text-xl pt-2">
                        Database Programmer
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <img
                          src={imagesquare}
                          alt=""
                          className="w-[60px] h-[60px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between py-3">
                    <div>$14,000 - $25,000</div>
                    <div>London, England</div>
                  </div>

                  <div className="flex flex-row py-5 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </div>

                  <div className="flex flex-row pt-4">
                    <div className="pr-4 ">
                      <button
                        type="button"
                        className="bg-[#DAFF3E] text-black px-5 py-2 rounded-full font-bold flex"
                      >
                        FAST APPLY
                        <img
                          src={lightning}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-black text-[#DAFF3E] px-5 py-2 rounded-full font-bold flex"
                      >
                        <img
                          src={dollarbag}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        REFER & GET N500
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT 2 */}
              <div className="flex flex-col px-4">
                <div className="text-left text-base block px-7 py-6 mt-4  bg-white rounded-[20px] focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                  <div className="flex flex-row justify justify-between">
                    <div className="flex flex-col">
                      <div>Maximoz Team</div>
                      <div className="font-bold text-xl pt-2">
                        Database Programmer
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <img
                          src={imagesquare}
                          alt=""
                          className="w-[60px] h-[60px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between py-3">
                    <div>$14,000 - $25,000</div>
                    <div>London, England</div>
                  </div>

                  <div className="flex flex-row py-5 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </div>
                  <div className="flex flex-row pt-4">
                    <div className="pr-4">
                      <button
                        type="button"
                        className="bg-[#DAFF3E] text-black px-5 py-2 rounded-full font-bold flex"
                      >
                        FAST APPLY
                        <img
                          src={lightning}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-black text-[#DAFF3E] px-7 py-2 rounded-full font-bold flex"
                      >
                        <img
                          src={dollarbag}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        REFER & GET N500
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobListing;
