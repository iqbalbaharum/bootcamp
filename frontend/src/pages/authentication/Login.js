import React from "react";
import { Link } from "react-router-dom";
import near from "../../../assets/img/near.png";
import bg from "../../../assets/img/globe.png";
import email from "../../../assets/img/email.png";
import google from "../../../assets/img/google.png";

function Login(props) {
  props.funcNav(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed mt-[15em]"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="flex flex-col justify-center items-center-center text-[#DAFF3E] font-robotoMono -mt-[10%]">
          <p className="text-[5vh] font-bold">WELCOME TO WEB3_CAREER HUB</p>
          <div className="w-[15%] pt-[rem] m-auto">
            <div className="flex flex-col justify-center items-center mt-10 mx-[6rem]">
              <div>
                <Link to="/emailogin">
                  <button
                    type="button"
                    className="bg-[#DAFF3E] px-6 py-3 w-[230px] mb-4 rounded-2xl"
                  >
                    <div className="flex justify-between">
                      <div className="uppercase font-bold text-[3vh] text-black">
                        <p>email</p>
                      </div>
                      <div>
                        <img
                          src={email}
                          alt=""
                          className="w-[28px] h-[28px] mt-1"
                        />
                      </div>
                    </div>
                  </button>
                </Link>
                <Link to="/profileForm">
                  <button
                    type="button"
                    className="bg-[#DAFF3E]  px-6 py-3 w-[230px] mb-4 rounded-2xl"
                  >
                    <div className="flex justify-between">
                      <div className="uppercase font-bold text-[3vh] text-black">
                        <p>google</p>
                      </div>
                      <div>
                        <img
                          src={google}
                          alt=""
                          className="w-[28px] h-[28px] mt-1"
                        />
                      </div>
                    </div>
                  </button>
                </Link>
                <Link to="/profile/form">
                  <button
                    type="button"
                    className="bg-[#DAFF3E]  px-6 py-3 w-[230px] mb-4 rounded-2xl"
                  >
                    <div className="flex justify-between">
                      <div className="uppercase font-bold text-[3vh] text-black">
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
                </Link>
              </div>
            </div>
          </div>
          <div className="text-[#DAFF3E] text-xs mt-5 w-full">
            By signing in, you are agree to our terms of services
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

export default Login;
