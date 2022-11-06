import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/globe2.png";
import { GloryBadge } from "../../nft_contracts/glory-badge";
import { useNavigate } from 'react-router-dom';

/*TODO
* GENERATE TOKEN IDS
*/

function IssueNftForm({wallet}) {

  const navigate = useNavigate();
  const contract = new GloryBadge({contractId: "sordgom_2_nft.testnet", walletToUse: wallet });

  const [log, setLog] = useState();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [artwork, setArtwork] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
    navigate('/nftlink');
  }

  //Mint nft
  async function handleSubmit(){
    try{
      if(!name || !artwork || !startDate || !endDate) {
        console.log('Somethings missing');
        return ; 
      }
      await contract.nft_mint(
      "token-16",
        {
            title: name,
            description: description,
            media : artwork,
            issued_at : new Date().toISOString() ,
            expires_at : endDate ,
            starts_at : startDate ,
            extra: "Creator" //This is supposed to reference who's minting (1 for owner, 2 for claimers  or something)
        },  
        wallet.accountId
      )     
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    wallet.createAccessKeyFor = "sordgom_2_nft.testnet" //Change contract address for the current wallet
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
        <div className="mx-[20rem] p-[5rem]">
          <div className="bg-[#DAFF3E] rounded-[10px] font-robotoMono p-[2rem] px-[6rem]">
            <p className="text-[4vh] font-bold text-center text-black font-robotoMono mb-[2rem]">
              Issue a New Glory Badge
            </p>
            <div className="text-sm">
              <form>
                <div className="mb-3 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000]"
                  >
                    Name of the Badge
                  </label>
                  <input
                    type=""
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="my-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000]"
                  >
                    Description (What’s so special about this Badge?)
                  </label>
                  <input
                    type=""
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-semibold text-black"
                  >
                    Artwork
                  </label>
                  <input
                    type=""//Changed "file" to "" temporarily till we implement IPFS
                    onChange={(e) => setArtwork(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <div className="text-sm">
                    Mandatory: PNG or GIF format <br />
                    Recommended: size less than 200KB (Max. 4MB)
                  </div>
                </div>
                <div className="mt-[2rem] text-left flex flex-row justify-between">
                  <div className="flex flex-col">
                    <label
                      htmlFor="endorsing"
                      className="block text-sm font-semibold text-black"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                      className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="endorsing"
                      className="block text-sm font-semibold text-black"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                      className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-white px-4 py-1 rounded-full font-bold  text-gray-700 border  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-60"
                  >
                    {/* <Link to="/nftlink">SUBMIT</Link> */}
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

export default IssueNftForm;
