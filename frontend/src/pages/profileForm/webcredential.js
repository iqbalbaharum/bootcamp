import React from "react";

function WebCredential() {
  return (
    <div className="px-[10rem] py-[1rem] mt-12 font-robotoMono">
      <div className="bg-[#DAFF3E] rounded-[30px]">
        <div className="mx-[5rem] py-[2rem]">
          <div className="text-xl py-[1rem]">
            <b>WEB3 CREDENTIAL</b>
          </div>
          <form>
            <div className="mb-2 px-[1rem] py-[2rem]">
              <div className="grid grid-rows-1 grid-flow-col gap-1 rounded-lg">
                <div>
                  <b>
                    Don't have a wallet?
                    <br /> Create one here
                  </b>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-black border-solid border-2 border-black text-[#DAFF3E] px-5 py-3 rounded-lg font-bold"
                  >
                    CONNECT WALLET
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WebCredential;
