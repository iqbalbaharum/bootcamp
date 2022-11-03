import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/globe2.png";

function BatchMint() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="mx-[20rem] p-[5rem]">
          <div className="bg-[#DAFF3E] rounded-[10px] p-[3rem] px-[4rem] font-robotoMono">
            <form>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-center text-gray-700 bg-white border rounded-md"
                  >
                    Upload Wallet Address
                  </button>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-center text-gray-700 bg-white border rounded-md"
                  >
                    <Link to="/indexissuenft">Create New Badges</Link>
                  </button>
                </div>
              </div>
              <div className="block w-full px-[3rem] py-2 mt-2 text-center text-gray-700 bg-white border rounded-md">
                <div className="flex flex-row text-2xl font-bold justify-center m-[1rem]">
                  Select and Mint in Batch
                </div>
                <div className="flex flex-row my-[2rem]">
                  <button
                    type="button"
                    className="bg-white rounded-md border-2 text-xs p-1"
                  >
                    Select All
                  </button>
                </div>
                <div className="flex flex-col text-sm">
                  <div className="flex flex-row justify-between mb-4">
                    <div className="ml-[1rem]">Wallet Address</div>
                    <div className="mr-[5rem]">Request Time</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
                    </div>
                    <div>14 Sep 2022 17:25 UTC+0</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
                    </div>
                    <div>14 Sep 2022 17:25 UTC+0</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
                    </div>
                    <div>14 Sep 2022 17:25 UTC+0</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <input type="checkbox" className="mr-2" />
                      3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
                    </div>
                    <div>14 Sep 2022 17:25 UTC+0</div>
                  </div>
                </div>

                <div className="flex flex-row my-[2rem]">
                  <button
                    type="button"
                    className="bg-black text-[#DAFF3E] rounded-full px-3 py-1 text-sm"
                  >
                    Mint and Distribute Badges
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

export default BatchMint;
