import React ,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/image.png";
import logoBig from "../../../assets/img/logoBig.png";
import { Endorsement } from "../../nft_contracts/endorsement";

function Endorsements({wallet}) {
  const [nfts, setNfts] = useState([]);
  const contract = new Endorsement({contractId: process.env.ENDORSEMENT_CONTRACT, walletToUse: wallet });
  
  async function getTokens() { 
    await contract.owner_tokens(wallet.accountId).then(setNfts)
  }

  useEffect(()=> {
    wallet.createAccessKeyFor = process.env.ENDORSEMENT_CONTRACT
    getTokens() 
  },[])

  useEffect(()=> {
    console.log(nfts)
  },[nfts])

  return (
    <div className="px-[10rem] py-[3rem] mt-8 font-robotoMono">
      <div>
        <form>
          <div>
            <div className="mb-2 text-left px-[6rem]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="text-2xl">
                    <b>Endorsement</b>
                  </div>
                </div>

                <div className="flex flex-col just">
                  <button
                    type="button"
                    className="bg-black border-2 border-black text-[#DAFF3E] mt-1 px-5 py-1 rounded-full"
                  >
                    <Link to="/wallet">ISSUE NEW</Link>
                  </button>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------- content ------------------------------------------------------------------------------- */}
          </div>
        
         {
           nfts.length > 0 && 
           nfts.map((val,key) => {
             return (
              <div className="flex flex-col" key={key}>
                <div className="flex text-left">
                  <img src={image} alt="" className="w-[50px] h-[50px]" />
                  <div className="px-[2rem]">
                    <b>{val.metadata.title}</b> <br />
                    {val.metadata.description}
                  </div>
                </div>
              </div>
             )
           })
         }
            
          {/* ------------------------------------------------ logo & button ---------------------------------------------------------------- */}
          <div className="mb-2 text-left px-[6rem] py-[7rem]">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col">
                <div className="flex">
                  <div>
                    <img
                      src={logoBig}
                      alt=""
                      className="w-auto h-[41px] pr-4"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-black border-2 border-black text-[#DAFF3E] mt-1 px-4 py-1 rounded-full"
                    >
                      CREATE MY WEB3 PROFILE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Endorsements;
