import React from "react";

import bg from "../../../assets/img/globe.png";

function EmailLogin(props) {
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
          <div className="w-[30%] pt-[rem] m-auto">
            <div className="flex flex-col justify-center items-center mt-10 mx-[6rem] text-black">
              <input
                type="text"
                className="bg-[#DAFF3E] px-4 py-3 w-[300px] mb-4 rounded-lg"
                placeholder="Email"
              />

              <input
                type="password"
                className="bg-[#DAFF3E]  px-4 py-3 w-[300px] mb-4 rounded-lg"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div className="text-[#DAFF3E] text-xs mt-5 w-full">
          By signing in, you are agree to our terms of services
        </div>
      </div>
    </div>
  );
}

export default EmailLogin;
