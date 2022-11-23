import { Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
// import { Down, Up } from "@icon-park/react";


function JobMgmt() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-11-15T03:21:27+08:00") - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const navigate = useNavigate()

  return (
    <div className="relative overflow-x-hidden bg-[#DAFF3E] w-full h-screen">
      <div className="mx-[8rem] my-8 font-robotoMono">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <button
              type="button"
              className="bg-black border-solid text-[#DAFF3E] px-16 py-3 rounded-lg font-bold mb-4"
            >
              Job Listing
            </button>
            <button
              type="button"
              className="bg-white border-solid text-black px-16 py-3 rounded-lg font-bold mb-4"
            >
              My Application
            </button>
            <button
              type="button"
              className="bg-white border-solid text-black px-16 py-3 rounded-lg font-bold"
            >
              Referrals
            </button>
            <button
              type="button"
              className="bg-black border-solid text-[#DAFF3E] px-16 py-3 rounded-lg font-bold mb-4 bottom-4 fixed"
              onClick={() => navigate('/user/profile/form')}
            >
              Back to Profile
            </button>
          </div>
          <div className="bg-[#F2F2F2] rounded-lg ml-8 w-full py-5">
            <div className="px-8">
              <div className="py-6 text-center font-bold text-2xl">
                Manage Job Listing
              </div>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button as={Fragment}>
                      <button
                        type="button"
                        className="flex p-2 w-full bg-[#DAFF3E] px-4 justify-between rounded-lg"
                      >
                        <span className="text-black pl-2 font-bold text-lg">
                          Database Programmer
                        </span>
                        {/* <Down
                          size="24"
                          className={`${
                            open ? "rotate-180 transform ml-2" : ""
                          }  text-black ml-2`}
                        /> */}
                      </button>
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul">
                      <div>
                        <div className="bg-black my-4 rounded-lg">
                          <div className="px-4 py-2 flex flex-row items-center w-full justify-between">
                            <div className="flex flex-row items-center">
                              <div className="px-13 py-13 bg-gray-500 rounded-full"></div>
                              <div className="flex flex-col text-[#DAFF3E] text-left font-semibold ml-4 text-lg">
                                <div>
                                  Candidate: {""}
                                  <span className="underline underline-offset-2">
                                    Constance @11x11
                                  </span>
                                </div>
                                <div>Referer: Direct</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                            >
                              Hire
                            </button>
                          </div>
                        </div>
                        <div className="bg-black my-4 rounded-lg">
                          <div className="px-4 py-2 flex flex-row items-center w-full justify-between">
                            <div className="flex flex-row items-center">
                              <div className="px-13 py-13 bg-gray-500 rounded-full"></div>
                              <div className="flex flex-col text-[#DAFF3E] text-left font-semibold ml-4 text-lg">
                                <div>
                                  Candidate: {""}
                                  <span className="underline underline-offset-2">
                                    Constance @11x11
                                  </span>
                                </div>
                                <div>Referer: Direct</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                            >
                              Hire
                            </button>
                          </div>
                        </div>
                        <div className="bg-black my-4 rounded-lg">
                          <div className="px-4 py-2 flex flex-row items-center w-full justify-between">
                            <div className="flex flex-row items-center">
                              <div className="px-13 py-13 bg-gray-500 rounded-full"></div>
                              <div className="flex flex-col text-[#DAFF3E] text-left font-semibold ml-4 text-lg">
                                <div>
                                  Candidate: {""}
                                  <span className="underline underline-offset-2">
                                    Constance @11x11
                                  </span>
                                </div>
                                <div>Referer: Direct</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                            >
                              Hire
                            </button>
                          </div>
                        </div>

                        <div className="bg-[#797979] my-4 rounded-lg">
                          <div className="px-4 py-4 flex flex-row items-center w-full justify-between">
                            {timeLeft.days ||
                            timeLeft.hours ||
                            timeLeft.minutes ||
                            timeLeft.seconds ? (
                              <div className="text-black text-left font-semibold text-lg">
                                <span>Validity</span>{" "}
                                <span>{timeLeft.days} Day</span>{" "}
                                <span>{timeLeft.hours} Hour</span>{" "}
                                <span>{timeLeft.minutes} Minute</span>
                              </div>
                            ) : (
                              <p>Time is up 🔥</p>
                            )}
                            <button
                              type="button"
                              className="bg-black border-solid text-white rounded-xl font-bold px-8 py-1 flex justify-end"
                            >
                              Unlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button as={Fragment}>
                      <button
                        type="button"
                        className="flex p-2 w-full bg-white px-4 justify-between rounded-lg my-4"
                      >
                        <span className="text-black pl-2 font-normal text-lg">
                          Intern Programmer
                        </span>
                        {/* <Up
                          size="24"
                          className={`${
                            open
                              ? "rotate-180 transform ml-2"
                              : "rotate-90 transform ml-2"
                          }  text-[#D7F050] ml-2`}
                        /> */}
                      </button>
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul">
                      <div>
                        <div className="bg-black my-4 rounded-lg">
                          <div className="px-4 py-2 flex flex-row items-center w-full justify-between">
                            <div className="flex flex-row items-center">
                              <div className="px-13 py-13 bg-gray-500 rounded-full"></div>
                              <div className="flex flex-col text-[#DAFF3E] text-left font-semibold ml-4 text-lg">
                                <div>
                                  Candidate: {""}
                                  <span className="underline underline-offset-2">
                                    Constance @11x11
                                  </span>
                                </div>
                                <div>Referer: Direct</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                            >
                              Hire
                            </button>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <div className="flex p-2 w-full bg-white px-4 justify-between rounded-lg my-4">
                <span className="text-black pl-2 font-normal text-lg">
                  Rust Developer
                </span>
                <button
                  type="button"
                  className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                >
                  Re-list
                </button>
              </div>
              <div className="flex p-2 w-full bg-white px-4 justify-between rounded-lg my-4">
                <span className="text-black pl-2 font-normal text-lg">
                  Community Manager
                </span>
                <button
                  type="button"
                  className="bg-[#DAFF3E] border-solid text-black rounded-xl font-bold px-8 py-1 flex justify-end"
                >
                  Re-list
                </button>
              </div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  className="bg-[#DAFF3E] border-solid text-black rounded-full font-bold px-8 py-1 "
                >
                  List New Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobMgmt;
