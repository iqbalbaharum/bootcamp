import React ,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/globe2.png";
import { GloryBadge } from "../../nft_contracts/glory-badge";
import { useNavigate } from 'react-router-dom';
import { check } from "prettier";

const addresses = [
  {
    address: "sordgom_1.testnet",
    date: "14 Sep 2022 17:25 UTC+0",
  },
  {
    address: "sordgom_1.testnet",
    date: "14 Sep 2022 17:25 UTC+0",
  },
  {
    address: "sordgom_1.testnet",
    date: "14 Sep 2022 17:25 UTC+0",
  },
  {
    address: "sordgom_1.testnet",
    date: "14 Sep 2022 17:25 UTC+0",
  },
];

/*TODO
* GENERATE TOKEN IDS
* Fetch list of addresses...
* Fetch token information
*/
function BatchMint({wallet}) {
  const navigate = useNavigate();
  const contract = new GloryBadge({contractId: "sordgom_2_nft.testnet", walletToUse: wallet });

  //States of the components
  const [list, setList] = useState([]);

  //State that tracks whether checkboxes are clicked or not
  const [checkedState, setCheckedState] = useState(
    new Array(4).fill(false) //Change 4 to the number of address we fetch 
  );

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
     navigate('/'); //Not sure we navigate to where after this
   }

  //Creates a boolean state for each address(returns checked)
  const handleOnClick = (index) => {
    const updatedCheckedState = checkedState.map((val, key) =>{
      if (key === index) {
        return !val;
      } else {
        return val;
      }
    });
    setCheckedState(updatedCheckedState);
  };
  
  //The data is supposed to be fetched from db
  async function handleSubmit(){
    try{
      await contract.bulk_nft_mint(
      "token-100",
        {
            title: "Test",
            description: "Test",
            media : "https://media.giphy.com/media/6SZ5iwN70lJyOdLZZH/giphy.gif",
            issued_at : new Date().toISOString() ,
            expires_at : "" ,
            starts_at : "" ,
            extra: "1" //This is supposed to reference who's minting (1 for owner, 2 for claimers  or something)
        },  
        list
      )     
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    wallet.createAccessKeyFor = "sordgom_2_nft.testnet" //Change contract address for the current wallet
    checkTxh();
  },[])

  //Add the checked address to a list of total addresses
  useEffect(() => {
    let newlist = [];
    checkedState.map((val, key) =>{
      if (val){
        newlist.push(addresses[key].address)
      }
    });
    setList(newlist);
  },[checkedState]);

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
                  {
                    addresses.map((val,key) => {
                      return (
                        <div className="flex flex-row justify-between" key={key}>
                          <div>
                              <input type="checkbox" className="mr-2" onClick={() => handleOnClick(key)}/>
                              {val.address}
                          </div>
                          <div>{val.date}</div>
                        </div>
                      );
                    })
                  }
                </div>

                <div className="flex flex-row my-[2rem]">
                  <button
                    type="button"
                    className="bg-black text-[#DAFF3E] rounded-full px-3 py-1 text-sm"
                    onClick={handleSubmit}
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
