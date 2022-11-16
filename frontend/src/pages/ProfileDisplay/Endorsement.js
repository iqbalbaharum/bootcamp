import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/image.png";
import logoBig from "../../../assets/img/logoBig.png";

function Endorsement() {
  return (
    <div className="sm:mt-[15rem] mt-[5rem] font-robotoMono">
      <form>
        <div className="mb-2 text-left sm:px-[6rem]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="sm:text-2xl text-lg font-bold">Endorsement</div>
            </div>

            <div className="flex flex-col items-center">
              <a
                type="button"
                className="bg-black border-2 border-black text-[#DAFF3E] px-5 py-1 rounded-full sm:text-base text-[1.5vh]"
                href="/indexissuenft"
              >
                ISSUE NEW
              </a>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------- content ------------------------------------------------------------------------------- */}

        <div className="flex flex-row pt-5 sm:mx-[6rem]">
          <div className="flex flex-col">
            <div className="flex text-left">
              <img src={image} alt="" className="w-[50px] h-[50px]" />
              <div className="sm:px-[2rem] sm:text-base text-[1.4vh] mx-[0.7rem]">
                <b>Illia is an excellent engineer</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex text-left">
              <img src={image} alt="" className="w-[50px] h-[50px]" />
              <div className="sm:px-[2rem] sm:text-base text-[1.4vh] mx-[0.7rem]">
                <b>Illia is an excellent engineer</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------ logo & button ---------------------------------------------------------------- */}
        <div className="sm:mb-2 text-left sm:px-[6rem] sm:py-[7rem] py-[5rem]">
          <div className="flex flex-row sm:justify-center items-center justify-between">
            <div className="sm:mr-4">
              <img src={logoBig} alt="" className="w-auto h-[41px]" />
            </div>
            <div className="mt-4 ">
              <button
                type="button"
                className="bg-black border-2 border-black text-[#DAFF3E] px-4 py-1 rounded-full sm:text-base text-[1vh]"
              >
                CREATE MY WEB3 PROFILE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Endorsement;
