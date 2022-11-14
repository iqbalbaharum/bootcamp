import React, { useEffect, useState } from "react";
import bg from "../../../assets/img/globe2.png";
import { useSearchParams } from "react-router-dom";

function NftLink() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [copyText, setCopyText] = useState("");
  const onCopy = () => {
    navigator.clipboard.writeText(copyText);
  };

  useEffect(() => {
    let txh = searchParams.get("link")
    setCopyText(`http://localhost:1234/claim?txh=${txh}`)
    console.log(navigator)
  },[])

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
          <div className="bg-[#DAFF3E] rounded-[10px] font-robotoMono p-[3rem] px-[6rem]">
            <p className="text-[4vh] font-bold text-center text-black font-robotoMono ">
              Issue a New Glory Badge
            </p>
            <div>
              <form>
                <div className="my-[10rem]">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000] mb-3"
                  >
                    Here’s your Glory Badge Link, share with your audience :D
                  </label>
                  <div>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-center text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      value={copyText}
                      onChange={(e) => setCopyText(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="text-sm mt-3 js-copy-to-clip"
                    onClick={onCopy}
                  >
                    Click to Copy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftLink;
