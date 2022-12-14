import React from "react";
import { Link, useNavigate } from "react-router-dom";
import near from "../../../assets/img/near.png";
import bg from "../../../assets/img/globe.png";
import email from "../../../assets/img/email.png";
import google from "../../../assets/img/google.png";
import { useWallet } from "../../hooks/useWallet";

function Login() {
  const { accountId, signIn } = useWallet();
  const navigate = useNavigate();

  if (accountId) {
    navigate("/jobs");
  }

  const onHandleNearButton = () => {
    signIn("seed.bonebon.testnet");
  };

  return (
    <div className="container mx-auto mt-10 text-left">
      <div
        className="relative block rounded-xl border border-gray-100 p-8 shadow-lg"
      >

        <div class="mt-4 text-gray-500 sm:pr-8">
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex items-center">
              <div>
                <h2 className="my-1 text-4xl font-medium text-gray-900">
                  Login
                </h2>
                <p>Let`s build something amazing.</p>
                <div className="block mt-10">
                  <button
                    type="button"
                    className="bg-[#DAFF3E] mx-auto px-6 py-2 w-3/4 mb-4 rounded-2xl"
                    onClick={onHandleNearButton}
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
                </div>
                <div className="text-md mt-1 w-full">
                  By signing in, you are agree to our terms of services
                </div>
              </div>
            </div>
            <div className="bg-black rounded-md p-1">
              <img src={bg} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative min-h-screen overflow-hidden bg-black">
    //   <div
    //     className="w-full h-full fixed mt-[15em]"
    //     style={{
    //       background: `url(${bg}) no-repeat bottom`,
    //       backgroundSize: "cover",
    //       backgroundOrigin: "content-box",
    //     }}
    //   >
    //     <div className="flex flex-col justify-center items-center-center text-[#DAFF3E] font-robotoMono -mt-[10%]">
    //       <p className="text-[5vh] font-bold">WELCOME TO WEB3_CAREER HUB</p>
    //       <div className="w-[15%] pt-[rem] m-auto">
    //         <div className="flex flex-col justify-center items-center mt-10 mx-[6rem]">
    //           <div>
    //             
    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-[#DAFF3E] text-xs mt-5 w-full">
    //         By signing in, you are agree to our terms of services
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
