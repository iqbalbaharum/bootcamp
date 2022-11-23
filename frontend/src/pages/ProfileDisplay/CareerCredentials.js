import React ,{useEffect, useState} from "react";
import logo from "../../../assets/img/companyLogo.png";
import rec from "../../../assets/img/Rectangle.png";
import { useWallet } from "../../hooks/useWallet";
import { GloryBadge } from "../../nft_contracts/glory-badge";

function Career() {
  const [nfts, setNfts] = useState([]);
  const { accountId, viewMethod } = useWallet()

  const getTokens = async () => {
    const res = await viewMethod(process.env.GLORY_BADGE_CONTRACT, 'nft_tokens_for_owner', { account_id: accountId, from_index:"0", limit:"200"})
    setNfts(res)
  }

  useEffect(()=> {
    if(accountId) {
      getTokens()
    }
  },[accountId, nfts, getTokens])

  return (
    <div className="px-[10rem] mt-10 font-robotoMono pb-10">
      <div className="flex flex-col justify-center px-[6rem]">
        <p className="text-left text-[40px] font-bold">Career Credentials</p>
        <div className="bg-black text-[#DAFF3E] text-left h-[180px] w-[950px] text-xl pl-10 py-6 font-bold rounded-2xl">
          <p>Senior Architect at Google</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {
            nfts.length > 0 && 
            nfts.map((val,key) => {
              return (
                <div className="bg-black  rounded-2xl" key={key}>
                  <div className="relative px-3 pt-3">
                    <img src={val.metadata.media} alt="" />
                    <div className="absolute -mt-14 ml-2">
                      <img src={logo} alt="" />
                    </div>
                  </div>
                  <div className="text-[#DAFF3E] text-left px-5 mt-5">
                    <p className="font-bold text-[24px]">{val.metadata.title}</p>
                    <p className="font-normal text-[16px]">
                    {val.metadata.description}
                    </p>
                    <p className="font-bold text-[20px] py-4">{val.metadata.issued_at}</p>
                  </div>
                </div>
              )})
          }
          
          
        </div>
      </div>
    </div>
  );
}

export default Career;
