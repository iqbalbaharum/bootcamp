import React from "react";
import { Link } from "react-router-dom";
import near from "../../../assets/img/near.png";
import bg from "../../../assets/img/globe.png";

function Wallet() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed mt-[12rem]"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="flex flex-col justify-center items-center-center text-[#DAFF3E] font-robotoMono -mt-[10%]">
          <p className="text-[5vh] font-bold">WELCOME TO WEB3_CAREER HUB</p>
          <div className="w-[15%] pt-[5rem] m-auto">
            <p className="text-[4vh] font-bold text-center uppercase font-robotoMono">
              CONNECT WALLET TO ENDORSE
            </p>
            <Link to="/issue">
              <button
                type="button"
                className="bg-[#DAFF3E]  px-6 py-3 w-[230px] rounded-2xl mt-10"
              >
                <div className="flex justify-between">
                  <div className="uppercase font-bold text-[3vh] text-black">
                    <b>near</b>
                  </div>
                  <div>
                    <img src={near} alt="" className="w-[28px] h-[28px] mt-1" />
                  </div>
                </div>
              </button>
            </Link>
          </div>

          {/* <div className="w-[30%] px-8 py-[7rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
            <p className="text-[5vh] font-bold text-center text-black uppercase font-robotoMono">
              CONNECT WALLET TO ENDORSE
            </p>
            <div className="flex flex-col justify-center items-center mt-28 mx-[6rem]">
              <div>
                <button
                  type="button"
                  className="bg-white px-6 py-3 w-[230px] mb-4 rounded-2xl"
                >
                  <div className="flex justify-between">
                    <div className="uppercase font-bold text-[3vh]">
                      <p>near</p>
                    </div>
                    <div>
                      <img
                        src={near}
                        alt=""
                        className="w-[28px] h-[28px] mt-1"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Wallet;
