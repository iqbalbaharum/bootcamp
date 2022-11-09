import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/globe2.png";
import { Endorsement } from "../../nft_contracts/endorsement";
import { useNavigate } from 'react-router-dom';

/*TODO
* GENERATE TOKEN IDS
*/

function IssueEndors({wallet}) {
  const navigate = useNavigate();

  const contract = new Endorsement({contractId: process.env.ENDORSEMENT_CONTRACT, walletToUse: wallet });

  const [receiverId, setReceiverId] = React.useState();
  const [text, setText] = React.useState();
  const [name, setName] = React.useState();

  const [log, setLog] = React.useState();

   // Check if there is a transaction hash in the URL
   const urlParams = new URLSearchParams(window.location.search);
   const logs = { txh : urlParams.get("transactionHashes"), errorCode: urlParams.get("errorCode"), errorMessage: urlParams.get("errorMessage")};
   async function checkTxh() {
     if(logs.errorCode){
       console.log(`Error: ${logs.errorCode}`);
       return ; 
     }
     if(logs.txh == null){
      return ; 
     }
     // Get result from the transactions
     let result =await wallet.getTransactionResult(logs.txh);
     setLog(result)
     navigate('/mintSuccess');
   }

  async function handleSubmit(){
    try{
      if(!receiverId || !text) {
        console.log('Somethings missing');
        return ; 
      }
      // argument name and value - pass empty object if no args required
      await contract.nft_mint(
        {
            title: name,
            description:text,
            text : text
        },
        receiverId
      );
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    console.log(process.env.ENDORSEMENT_CONTRACT)
    wallet.createAccessKeyFor = process.env.ENDORSEMENT_CONTRACT //Change contract address for the current wallet
    checkTxh();
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
        <div className="flex flex-col justify-center items-center w-full mt-20">
          <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
            <p className="text-[4vh] font-bold text-center text-black uppercase font-robotoMono">
              Issue an Endorsement NFT
            </p>
            <div className="mt-10 px-20">
              <form >
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000]"
                  >
                    Who are you endorsing? (his/her wallet address)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setReceiverId(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000]"
                  >
                    Name (Project/Your Name)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-semibold text-black"
                  >
                    Endorsement
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    className="h-20 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-20">
                    <button
                      type="button"
                      className="bg-white px-4 py-2 rounded-full font-bold"
                      onClick={handleSubmit}
                    >
                      Mint and Transfer
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

export default IssueEndors;
