import { useContext, createContext, useState, useEffect } from "react";

import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";

const FluenceContext = createContext()

export const FluenceProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if(!isConnected) {
      connect(krasnodar[0])
    }
  }, [])

  const connect = async(relayPeerId) => {
    // try {
    //   await Fluence.start({ connectTo: relayPeerId });
    //   setIsConnected(true);
    // } catch (err) {
    //   console.log("Peer initialization failed", err);
    // }
  }

  const value = {
  }

  return <FluenceContext.Provider value={value}>{children}</FluenceContext.Provider>;
}

export const useFluence = () => {
  return useContext(FluenceContext)
}