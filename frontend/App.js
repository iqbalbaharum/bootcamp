import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";

import "./assets/index.css";

import { Routes, Route } from "react-router-dom";

import "./App.css";

// context
import { ConfigContext } from "./src/context/config.context";
// Component
import Navbar from "./src/components/Navbar";
// Pages
import Profile from "./src/pages/profileForm";
import IndexJobListing from "./src/pages/JobList/IndexJobListing";
import ListJobDisplay from "./src/pages/JobList/ListJobDisplay";
import { NearWalletContext } from "./src/context/wallet.context";
import useIpfsFactory from "./src/hooks/useIpfsFactory";
import NavbarLayout from "./src/components/Layout/NavbarLayout";
import ProtectedLayout from "./src/components/Layout/ProtectedLayout";
import Tutorials from "./src/pages/Tutorials";
import TutorialSingle from "./src/pages/TutorialSingle";
import Hackathons from "./src/pages/Hackathons";
import Dashboard from "./src/pages/Dashboard";
import Event from "./src/pages/Event";
import EventProject from "./src/pages/Event/Project";

export default function App({ isSignedIn, wallet }) {
  const [config, setConfig] = useState({
    isAuthEnabled: true,
    isNavsEnabled: true,
  });

  const near = {
    isSignedIn,
    wallet,
  };

  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ["id"] });
  // const id = useIpfs(ipfs, 'id')
  const [version, setVersion] = useState();

  useEffect(() => {
    if (!ipfs) return;

    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    };

    getVersion();
  }, [ipfs]);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      <NearWalletContext.Provider value={near}>
        <div className="App">
          <div className="w-full h-screen flex flex-col justify-start ">
            <Routes>
              <Route
                path="/"
                element={
                  <NavbarLayout
                    isNavEnabled={config.isNavsEnabled}
                    isAuthEnabled={config.isAuthEnabled}
                  />
                }
              >
                {/* Job Listing */}
                <Route exact path="/jobs" element={<ListJobDisplay />} />
                <Route exact path="/job/create" element={<IndexJobListing />} />
              </Route>

              <Route path="/user" element={<ProtectedLayout />}>
                <Route path="profile/form" element={<Profile />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>

              <Route path="/" element={<ProtectedLayout />}>
                <Route index element={<Tutorials />} />
                <Route exact path="tutorial/:id" element={<TutorialSingle />} />
                <Route exact path="hackathons" element={<Hackathons />} />
                <Route exact path="event/:id/home" element={<Event />} />
                <Route exact path="event/:id/project" element={<EventProject />} />
                <Route exact path="*" element={<Tutorials />} />
              </Route>
            </Routes>
          </div>
        </div>
      </NearWalletContext.Provider>
    </ConfigContext.Provider>
  );
}
