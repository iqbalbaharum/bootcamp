import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';

import './assets/index.css';

import { Routes, Route } from "react-router-dom";

import "./App.css";

// context
import { ConfigContext } from './src/context/config.context';
// Component
import Navbar from './src/components/Navbar';
// Pages
import Home from "./src/pages/home";
import Login from "./src/pages/authentication/Login";
import Profile from "./src/pages/profileForm";
import ProfileDisplay from "./src/pages/ProfileDisplay/IndexProfileDisplay";
import Wallet from "./src/pages/profileConnect/ConnectWallet";
import IssueEndors from "./src/pages/profileConnect/IssueEndors";
import MintSuccess from "./src/pages/profileConnect/MintSuccess";
import EmailLogin from "./src/pages/authentication/EmailLogin";
import LandingPage from "./src/pages/Landingpage/IndexLandingPage";
import IndexJobListing from "./src/pages/JobList/IndexJobListing";
import ListJobDisplay from "./src/pages/JobList/ListJobDisplay";
import IndexRentTalent from "./src/pages/RentTalent/IndexRentTalent";
import IndexIssueNft from "./src/pages/IssueNFT/IndexIssueNft";
import NftLink from "./src/pages/IssueNFT/NftLink";
import BatchMint from "./src/pages/IssueNFT/BatchMint";
import JobListing from "./src/pages/ProfileDisplay/JobListing";
import { NearWalletContext } from './src/context/wallet.context';
import useIpfsFactory from './src/hooks/useIpfsFactory';
import useIpfs from './src/hooks/useIpfs';

export default function App({ isSignedIn, wallet }) {

  const [config, setConfig] = useState({
    isAuthEnabled: true,
    isNavsEnabled: true,
  })

  const near = {
    isSignedIn,
    wallet
  }

  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ['id'] })
  // const id = useIpfs(ipfs, 'id')
  const [version, setVersion] = useState()

  useEffect(() => {
    if (!ipfs) return;

    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    }

    getVersion();
  }, [ipfs])

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      <NearWalletContext.Provider value={near}>
        <div className="App">
          <div className="w-full h-screen flex flex-col justify-start ">
            <Navbar isNavEnabled={config.isNavsEnabled} isAuthEnabled={config.isAuthEnabled} />
            <Routes>

              {/* Landing Page */}
              <Route exact path="/" element={<LandingPage />} />
              
              <Route exact path="/home" element={<Home />} />
              {/* <Route path="*" element={<NotFound />} /> */}

              {/* Authentication */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/emailogin" element={<EmailLogin />} />

              {/* Profile Display */}
              <Route exact path="/profiledisplay" element={<ProfileDisplay />} />
              <Route exact path="/joblisting" element={<JobListing />} />

              {/* Profile Form */}
              <Route path="/profile/form" element={<Profile />} />

              {/* Job Listing */}
              <Route exact path="/listjobdisplay" element={<ListJobDisplay />} />
              <Route exact path="/job/create" element={<IndexJobListing />} />

              {/* NFT Endorsement */}
              <Route exact path="/wallet" element={<Wallet />} />
              <Route exact path="/issue" element={<IssueEndors wallet={wallet}/>} />
              <Route exact path="/mintSuccess" element={<MintSuccess />} />

              {/* Rent Talent */}
              <Route exact path="/rentalent" element={<IndexRentTalent />} />

              {/* Issue NFT */}
              <Route exact path="/indexissuenft" element={<IndexIssueNft wallet={wallet}/>} />
              <Route exact path="/nftlink" element={<NftLink />} />

              {/* Batch Minting */}
              <Route exact path="/batchmint" element={<BatchMint wallet={wallet} />} />
            </Routes>
          </div>
        </div>
      </NearWalletContext.Provider>
    </ConfigContext.Provider>
  );
}
