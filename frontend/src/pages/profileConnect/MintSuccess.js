import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/globe2.png";

function MintSuccess() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full mt-20">
          <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
            <div className="font-bold mt-[10rem] text-[5vh]">
              Minting is Successful!
            </div>
            <div className="mt-[10rem]">
              <Link to="/profiledisplay">
                <button
                  type="button"
                  className="bg-black px-4 py-2 rounded-full font-bold text-[#DAFF3E]"
                >
                  Back To Your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSuccess;
